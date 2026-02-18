import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPlace } from "../data/places";
import "./PlacePage.css";

export default function PlacePage() {
  const { slug } = useParams<{ slug: string }>();
  const place = getPlace(slug ?? "");

  if (!place) return <Navigate to="/map" replace />;

  return (
    <div className="place-page">
      <div className="place-hero" style={{ background: place.gradient }}>
        <span className="place-hero-emoji">{place.emoji}</span>
      </div>

      <div className="place-content">
        <p className="place-tagline">{place.tagline}</p>
        <h1 className="place-name">{place.name}</h1>
        <p className="place-description">{place.description}</p>

        <div className="place-actions">
          <Link to={`/game/${place.slug}`} className="place-cta">
            🎮 Play mini game
          </Link>
          <Link to="/map" className="place-back">
            ← Back to map
          </Link>
        </div>
      </div>
    </div>
  );
}
