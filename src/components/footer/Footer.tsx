import React from "react";
import tam1 from "../../photos/tamogatok/img1.png";
import tam2 from "../../photos/tamogatok/img2.png";
import tam3 from "../../photos/tamogatok/img3.png";
import tam4 from "../../photos/tamogatok/img4.png";
import tam5 from "../../photos/tamogatok/img5.png";
import tam6 from "../../photos/tamogatok/img6.png";
import tam7 from "../../photos/tamogatok/img7.jpg";
import tam8 from "../../photos/tamogatok/img8.png";
import tam9 from "../../photos/tamogatok/img9.png";
import egy1 from "../../photos/egyuttmukodok/img1.png";
import egy2 from "../../photos/egyuttmukodok/img2.png";

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

        <img src={tam1} alt="Támogató 1" style={{ height: "70px", width: "auto", objectFit: "contain" }} />

        <div style={{ height: "70px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={tam2} alt="Támogató 2" style={{ height: "90px", width: "auto", objectFit: "contain" }} />
        </div>

        <img src={tam3} alt="Támogató 3" style={{ height: "70px", width: "auto", objectFit: "contain" }} />

        <img src={tam4} alt="Támogató 4" style={{ height: "38px", width: "auto", objectFit: "contain" }} />

        <img src={tam5} alt="Támogató 5" style={{ height: "70px", width: "auto", objectFit: "contain" }} />

        <img src={tam6} alt="Támogató 6" style={{ height: "66px", width: "auto", objectFit: "contain" }} />

        <img src={tam7} alt="Támogató 7" style={{ height: "66px", width: "auto", objectFit: "contain" }} />

        <img src={tam8} alt="Támogató 8" style={{ height: "70px", width: "auto", objectFit: "contain" }} />

        <img src={tam9} alt="Támogató 9" style={{ height: "30px", width: "auto", objectFit: "contain" }} />
      </div>

      {/* Együttműködőink sor */}
      <div style={{ ...rowStyle, gap: "80px" }}>
        <span style={labelStyle}>Együttműködőink</span>
        <img src={egy1} alt="Együttműködő 1" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
        <img src={egy2} alt="Együttműködő 2" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
      </div>

    </footer>
  );
};

export default Footer;
