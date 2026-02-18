import React, { useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPlace, Place } from "../data/places";
import "./GamePage.css";

/* ── Types ────────────────────────────────────────────── */
interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

/* ── Helpers ──────────────────────────────────────────── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createDeck(emojis: Place["gameEmojis"]): Card[] {
  return shuffle([...emojis, ...emojis]).map((emoji, i) => ({
    id: i,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
}

/* ── Sub-components ───────────────────────────────────── */
interface CardButtonProps {
  card: Card;
  onClick: (id: number) => void;
}

function CardButton({ card, onClick }: CardButtonProps) {
  const cls = [
    "game-card",
    card.isFlipped || card.isMatched ? "game-card--flipped" : "",
    card.isMatched ? "game-card--matched" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={cls}
      onClick={() => onClick(card.id)}
      aria-label={card.isFlipped || card.isMatched ? card.emoji : "Hidden card"}
    >
      <div className="game-card-inner">
        <div className="game-card-front">?</div>
        <div className="game-card-back">{card.emoji}</div>
      </div>
    </button>
  );
}

/* ── Main component ───────────────────────────────────── */
export default function GamePage() {
  const { slug } = useParams<{ slug: string }>();
  const place = getPlace(slug ?? "");

  const [cards, setCards] = useState<Card[]>(() =>
    place ? createDeck(place.gameEmojis) : []
  );
  const [firstId, setFirstId] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);

  if (!place) return <Navigate to="/map" replace />;

  const pairCount = place.gameEmojis.length;
  const won = matchedCount === pairCount;

  const handleClick = useCallback(
    (id: number) => {
      if (locked) return;
      const card = cards[id];
      if (card.isFlipped || card.isMatched) return;

      const flipped = cards.map((c) =>
        c.id === id ? { ...c, isFlipped: true } : c
      );
      setCards(flipped);

      if (firstId === null) {
        setFirstId(id);
        return;
      }

      // Second card selected
      setMoves((m) => m + 1);
      setLocked(true);
      setFirstId(null);

      if (flipped[firstId].emoji === flipped[id].emoji) {
        // Match — mark both as matched
        const withMatch = flipped.map((c) =>
          c.id === firstId || c.id === id ? { ...c, isMatched: true } : c
        );
        setCards(withMatch);
        setMatchedCount((n) => n + 1);
        setLocked(false);
      } else {
        // No match — flip back after a short delay
        const prevFirstId = firstId;
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === prevFirstId || c.id === id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setLocked(false);
        }, 850);
      }
    },
    [cards, firstId, locked]
  );

  const reset = () => {
    setCards(createDeck(place.gameEmojis));
    setFirstId(null);
    setLocked(false);
    setMoves(0);
    setMatchedCount(0);
  };

  return (
    <div className="game-page">
      {/* Header */}
      <div className="game-header">
        <h1 className="game-title">Memory Match</h1>
        <p className="game-subtitle">@ {place.name} {place.emoji}</p>
      </div>

      {/* Stats */}
      <div className="game-stats">
        <span className="game-stat">
          Moves: <strong>{moves}</strong>
        </span>
        <span className="game-stat">
          Pairs:{" "}
          <strong>
            {matchedCount}/{pairCount}
          </strong>
        </span>
      </div>

      {won ? (
        /* Win screen */
        <div className="game-win">
          <div className="game-win-emoji">🎉</div>
          <h2 className="game-win-title">You won!</h2>
          <p className="game-win-sub">Completed in {moves} moves</p>
          <div className="game-win-actions">
            <button className="game-btn game-btn--ghost" onClick={reset}>
              Play again
            </button>
            <Link
              to={`/place/${place.slug}`}
              className="game-btn game-btn--primary"
            >
              Back to {place.name}
            </Link>
          </div>
        </div>
      ) : (
        /* Board */
        <>
          <div className="game-grid">
            {cards.map((card) => (
              <CardButton key={card.id} card={card} onClick={handleClick} />
            ))}
          </div>
          <button className="game-btn game-btn--ghost" onClick={reset}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}
