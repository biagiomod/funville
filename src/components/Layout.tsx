import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="layout">
      <header className="layout-header">
        <Link to="/" className="layout-logo">
          🎡 Funville
        </Link>
        {!isHome && (
          <nav>
            <Link to="/map" className="layout-nav-link">
              Town Map
            </Link>
          </nav>
        )}
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <p>Made with ♥ in Funville</p>
      </footer>
    </div>
  );
}
