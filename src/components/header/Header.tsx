import React from "react";
import feketeLogo from "../../photos/feketeLogo.png";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "PROGRAMOK", href: "#programok" },
  { label: "KONTAKT", href: "#kontakt" },
  { label: "RÓLUNK", href: "#rolunk" },
];

const Header = (): React.JSX.Element => {
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

      {/* Logo + cím mindig egy sorban marad */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1 }}>
        <img
          src={feketeLogo}
          alt="DMM logó"
          style={{ height: "60px", objectFit: "contain", flexShrink: 0 }}
        />
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
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              fontFamily: "'Space Grotesk', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#000000",
              textDecoration: "none",
              lineHeight: "1.2",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#efd016")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
          >
            {item.label}
          </a>
        ))}
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
