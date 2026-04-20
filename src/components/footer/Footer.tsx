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

const Footer = (): React.JSX.Element => {
  return (
    <footer style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>

      {/* Támogatóink sor */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 6px",
        gap: "32px",
        height: "100px",
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          color: "#561269",
          whiteSpace: "nowrap",
          width: "124px",
        }}>
          Támogatóink
        </span>

        {/* img1: 103×70 */}
        <img src={tam1} alt="Támogató 1" style={{ width: "103px", height: "70px", objectFit: "contain", flexShrink: 0 }} />

        {/* img2: wrapper 114×70, belső kép 160×90 (kilóg) */}
        <div style={{ width: "114px", height: "70px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <img src={tam2} alt="Támogató 2" style={{ width: "160px", height: "90px", objectFit: "contain", flexShrink: 0 }} />
        </div>

        {/* img3: 70×70 */}
        <img src={tam3} alt="Támogató 3" style={{ width: "70px", height: "70px", objectFit: "contain", flexShrink: 0 }} />

        {/* img4: wrapper 100×52, belső kép 100×38 */}
        <div style={{ width: "100px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <img src={tam4} alt="Támogató 4" style={{ width: "100px", height: "38px", objectFit: "contain" }} />
        </div>

        {/* img5: 86×110 */}
        <img src={tam5} alt="Támogató 5" style={{ width: "86px", height: "110px", objectFit: "contain", flexShrink: 0 }} />

        {/* img6: 66×66 */}
        <img src={tam6} alt="Támogató 6" style={{ width: "66px", height: "66px", objectFit: "contain", flexShrink: 0 }} />

        {/* img7: 86×66 */}
        <img src={tam7} alt="Támogató 7" style={{ width: "86px", height: "66px", objectFit: "contain", flexShrink: 0 }} />

        {/* img8: 88×110 */}
        <img src={tam8} alt="Támogató 8" style={{ width: "88px", height: "110px", objectFit: "contain", flexShrink: 0 }} />

        {/* img9: 125×30 */}
        <img src={tam9} alt="Támogató 9" style={{ width: "125px", height: "30px", objectFit: "contain", flexShrink: 0 }} />
      </div>

      {/* Együttműködőink sor */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 6px",
        gap: "32px",
        height: "100px",
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          color: "#561269",
          whiteSpace: "nowrap",
        }}>
          Együttműködőink
        </span>
        <img src={egy1} alt="Együttműködő 1" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
        <img src={egy2} alt="Együttműködő 2" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
      </div>

    </footer>
  );
};

export default Footer;
