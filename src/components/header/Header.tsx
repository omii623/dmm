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
    <header className="dmm-header" style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 22px",
      height: "80px",
      backgroundColor: "#ffffff",
    }}>

      {/* Logo */}
      <Link to="/">
        <img
          src={feketeLogo}
          alt="DMM logó"
          className="dmm-logo" style={{ height: "140px", objectFit: "contain", display: "block" }}
        />
      </Link>

      <style>{`
        @media (max-width: 640px) {
          .header-nav { gap: clamp(8px, 3vw, 32px) !important; }
          .header-nav a { font-size: clamp(14px, 2.5vw, 18px) !important; }
        }
        @media (max-width: 500px) {
          .dmm-header { padding: 0 8px !important; }
          .dmm-logo { height: clamp(60px, 20vw, 140px) !important; }
        }
      `}</style>

      {/* Navigáció – egy sorban */}
      <nav className="header-nav" style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "32px",
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
                fontSize: "18px",
                color: isActive ? "#efd016" : "#000000",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#efd016")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#efd016" : "#000000")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

    </header>
  );
};

export default Header;
