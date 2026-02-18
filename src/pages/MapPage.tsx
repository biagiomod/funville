import React from "react";
import { Link } from "react-router-dom";
import { places } from "../data/places";
import "./MapPage.css";

export default function MapPage() {
  return (
    <div className="map-page">
      <h1 className="map-title">Town Map</h1>
      <p className="map-subtitle">Where do you want to explore today?</p>
      <div className="map-grid">
        {places.map((place) => (
          <Link
            key={place.slug}
            to={`/place/${place.slug}`}
            className="map-card"
            aria-label={`Visit ${place.name}`}
          >
            <div
              className="map-card-banner"
              style={{ background: place.gradient }}
            >
              <span className="map-card-emoji">{place.emoji}</span>
            </div>
            <div className="map-card-body">
              <h2 className="map-card-name">{place.name}</h2>
              <p className="map-card-tagline">{place.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
