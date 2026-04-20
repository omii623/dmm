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
      flexDirection: "row",
      alignItems: "center",
      padding: "0px 22px",
      gap: "30px",
      height: "182px",
      backgroundColor: "#ffffff",
      flexWrap: "wrap",
    }}>

      {/* Logo + cím együtt */}
      <div style={{ display: "flex", alignItems: "center", gap: "30px", flex: 1 }}>

        {/* Logo wrapper: 185×93, belső kép 191×191 kilóg */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <div style={{
            width: "185px",
            height: "93px",
            backgroundColor: "#ffffff",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}>
            <img
              src={feketeLogo}
              alt="DMM logó"
              style={{
                width: "191px",
                height: "191px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          </div>
        </Link>

        {/* Cím wrapper: 884×65 */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
          height: "65px",
        }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "41px",
            color: "#EFD016",
            margin: 0,
          }}>
            DESIGN ÉS MŰVÉSZETMENEDZSMENT FESZTIVÁL
          </h1>
        </div>

      </div>

      {/* Navigáció: 265×177 */}
      <nav style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px 16px",
        padding: "0px 3px",
        backgroundColor: "#ffffff",
        flexShrink: 0,
      }} className="header-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              style={{
                fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "41px",
                textAlign: "right",
                color: isActive ? "#efd016" : "#000000",
                textDecoration: "none",
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
        .header-nav {
          width: 100%;
          justify-content: center;
        }
        @media (min-width: 1100px) {
          .header-nav {
            flex-direction: column !important;
            align-items: flex-end !important;
            justify-content: center !important;
            width: 265px !important;
            height: 177px !important;
            gap: 0px !important;
          }
        }
      `}</style>

    </header>
  );
};

export default Header;
