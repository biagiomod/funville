import React from "react";
import { useNavigate } from "react-router-dom";
import { figmaAsset } from "../utils/asset";
import "./Welcome.css";

const heroPublic = "/assets/funville-hero.png";
const bookPublic = "/assets/icon-book-queue.svg";
const rocketPublic = "/assets/icon-rocket.svg";

const imgHero = figmaAsset(
  "4ceeeef3e94beef300d660facb7fc554ecf816fc.png",
  heroPublic,
);

const imgBookQueue = figmaAsset(
  "ca89860e2e8330038e60e7ca86c9769241c18c76.svg",
  bookPublic,
);

const imgRocket = figmaAsset(
  "cf23d0565dbaeb03cf7b4ca6a99f1117678628f0.svg",
  rocketPublic,
);

export default function Welcome() {
  const navigate = useNavigate();

  const handleFallback =
    (fallbackSrc: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      if (img.src !== window.location.origin + fallbackSrc) {
        img.src = fallbackSrc;
      }
    };

  return (
    <div className="welcome-card">
      {/* Hero image */}
      <div className="welcome-image-wrapper">
        <img
          src={imgHero}
          onError={handleFallback(heroPublic)}
          alt="Welcome to Funville"
          className="welcome-image"
        />
      </div>

      {/* Title */}
      <h1 className="welcome-title">Welcome to Funville!</h1>

      {/* Book Queue icon */}
      <img
        src={imgBookQueue}
        onError={handleFallback(bookPublic)}
        alt="Book queue"
        className="welcome-icon"
      />

      {/* Body copy */}
      <p className="welcome-body">
        Get ready for an exciting adventure full of games and surprises.
      </p>

      {/* CTA button */}
      <button
        className="welcome-btn"
        type="button"
        onClick={() => navigate("/map")}
      >
        <img
          src={imgRocket}
          onError={handleFallback(rocketPublic)}
          alt=""
          className="welcome-btn-icon"
          aria-hidden="true"
        />
        <span>Enter</span>
      </button>
    </div>
  );
}
