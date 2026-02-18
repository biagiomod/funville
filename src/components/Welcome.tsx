import React from "react";
import { useNavigate } from "react-router-dom";
import { figmaAsset } from "../utils/asset";
import "./Welcome.css";

const imgHero = figmaAsset(
  "4ceeeef3e94beef300d660facb7fc554ecf816fc.png",
  "/assets/funville-hero.png"
);
const imgBookQueue = figmaAsset(
  "ca89860e2e8330038e60e7ca86c9769241c18c76.svg",
  "/assets/icon-book-queue.svg"
);
const imgRocket = figmaAsset(
  "cf23d0565dbaeb03cf7b4ca6a99f1117678628f0.svg",
  "/assets/icon-rocket.svg"
);

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-card">
      {/* Hero image */}
      <div className="welcome-image-wrapper">
        <img src={imgHero} alt="Welcome to Funville" className="welcome-image" />
      </div>

      {/* Title */}
      <h1 className="welcome-title">Welcome to Funville!</h1>

      {/* Book Queue icon */}
      <img src={imgBookQueue} alt="Book queue" className="welcome-icon" />

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
          alt=""
          className="welcome-btn-icon"
          aria-hidden="true"
        />
        <span>Enter</span>
      </button>
    </div>
  );
}
