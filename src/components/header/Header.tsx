import React from "react";
import { Link, useLocation } from "react-router-dom";
import feketeLogo from "../../photos/feketeLogo.png";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "PROGRAMOK", path: "/programok" },
  { label: "KONTAKT", path: "/kontakt" },
  { label: "RÓLUNK", path: "/rolunk" },
];

const Header = (): React.JSX.Element => {
  const location = useLocation();

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      padding: "12px 24px",
      backgroundColor: "#ffffff",
      gap: "8px",
    }}>

      <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1 }}>
        <Link to="/">
          <img
            src={feketeLogo}
            alt="DMM logó"
            style={{ height: "60px", objectFit: "contain", flexShrink: 0, display: "block" }}
          />
        </Link>
        <h1 style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 700,
          fontSize: "28px",
          color: "#efd016",
          margin: 0,
        }}>
          DESIGN ÉS MŰVÉSZETMENEDZSMENT FESZTIVÁL
        </h1>
      </div>

      <nav style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "2px",
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              style={{
                fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: isActive ? "#efd016" : "#000000",
                textDecoration: "none",
                lineHeight: "1.2",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#efd016")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#efd016" : "#000000")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          header nav {
            flex-direction: row !important;
            justify-content: center;
            flex-wrap: wrap;
            gap: 16px !important;
            width: 100%;
          }
        }
      `}</style>

    </header>
  );
};

export default Header;
