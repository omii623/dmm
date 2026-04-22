import React from "react";
import tam1 from "../../photos/tamogatok/img1.webp";
import tam2 from "../../photos/tamogatok/img2.webp";
import tam3 from "../../photos/tamogatok/img3.webp";
import tam4 from "../../photos/tamogatok/img4.webp";
import tam5 from "../../photos/tamogatok/img5.webp";
import tam6 from "../../photos/tamogatok/img6.webp";
import tam7 from "../../photos/tamogatok/img7.webp";
import tam8 from "../../photos/tamogatok/img8.webp";
import tam9 from "../../photos/tamogatok/img9.png";
import egy1 from "../../photos/egyuttmukodok/img1.webp";
import egy2 from "../../photos/egyuttmukodok/img2.webp";

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px 24px",
  gap: "24px",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', Helvetica, sans-serif",
  fontWeight: 400,
  fontSize: "20px",
  color: "#561269",
  whiteSpace: "nowrap",
};

const Footer = (): React.JSX.Element => {
  return (
    <footer style={{ backgroundColor: "#ffffff" }}>

      {/* Támogatóink sor */}
      <div style={rowStyle}>
        <span style={labelStyle}>Támogatóink</span>

        <img loading="lazy" src={tam1} alt="Támogató 1" style={{ height: "70px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam2} alt="Támogató 2" style={{ height: "70px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam3} alt="Támogató 3" style={{ height: "60px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam4} alt="Támogató 4" style={{ height: "42px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam5} alt="Támogató 5" style={{ height: "80px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam6} alt="Támogató 6" style={{ height: "66px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam7} alt="Támogató 7" style={{ height: "66px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam8} alt="Támogató 8" style={{ height: "80px", width: "auto", objectFit: "contain" }} />

        <img loading="lazy" src={tam9} alt="Támogató 9" style={{ height: "30px", width: "auto", objectFit: "contain" }} />
      </div>

      {/* Együttműködőink sor */}
      <div style={{ ...rowStyle, gap: "80px" }}>
        <span style={labelStyle}>Együttműködőink</span>
        <img loading="lazy" src={egy1} alt="Együttműködő 1" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
        <img loading="lazy" src={egy2} alt="Együttműködő 2" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
      </div>

    </footer>
  );
};

export default Footer;
