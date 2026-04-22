import React from "react";
import photo from "../../photos/kontakt.webp";

const Kontakt = (): React.JSX.Element => {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "clamp(847px, calc(2120px - 150vw), 1150px)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      overflow: "hidden",
    }}>

      {/* KONTAKT cím: left 91, top 93 */}
      <h2 style={{
        position: "absolute",
        left: "91px",
        top: "clamp(93px, calc(1693px - 150vw), 700px)",
        width: "444px",
        fontFamily: "'Space Grotesk', Helvetica, sans-serif",
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "46px",
        color: "rgba(86, 18, 105, 0.64)",
        margin: 0,
        zIndex: 1,
      }}>
        KONTAKT
      </h2>

      {/* Szöveg blokk: left 91, top 199 */}
      <div style={{
        position: "absolute",
        left: "91px",
        top: "clamp(199px, calc(1799px - 150vw), 806px)",
        width: "934px",
        zIndex: 1,
        fontFamily: "'Space Grotesk', Helvetica, sans-serif",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "26px",
        color: "#000000",
      }}>
        <p style={{ margin: "0 0 4px 0" }}>Közösségi média</p>
        <ul style={{ margin: "0 0 16px 0", paddingLeft: "24px" }}>
          <li>Instagram&nbsp;&nbsp;
            <a href="https://instagram.com/szte_dmm" target="_blank" rel="noreferrer" style={{ color: "#000000", textDecoration: "underline" }}>
              szte_dmm
            </a>
          </li>
        </ul>

        <p style={{ margin: "0 0 4px 0" }}>Messenger</p>
        <ul style={{ margin: "0 0 26px 0", paddingLeft: "24px" }}>
          <li>
            <a href="https://www.facebook.com/messages/t/100076134463467/" target="_blank" rel="noreferrer" style={{ color: "#000000", textDecoration: "underline" }}>
              SZTE Design- és 
              <br/>
              művészetmenedzsment MA
            </a>
          </li>
        </ul>

        <p style={{ margin: "0 0 4px 0" }}>Telefonszám</p>
        <ul style={{ margin: "0 0 26px 0", paddingLeft: "24px" }}>
          <li>(62) 544 179</li>
        </ul>

        <p style={{ margin: "0 0 4px 0" }}>E-mail-cím</p>
        <ul style={{ margin: 0, paddingLeft: "24px" }}>
          <li>sztedesign@gmail.com</li>
        </ul>
      </div>

      {/* Kör alakú kép jobbra */}
      <div style={{
        position: "absolute",
        right: "clamp(-140px, calc(80vw - 800px), -80px)",
        top: "20px",
        zIndex: 0,
        width: "680px",
        height: "680px",
        borderRadius: "50%",
        overflow: "hidden",
      }}>
        <img
          src={photo}
          alt="Kontakt fotó"
          fetchPriority="high"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

    </section>
  );
};

export default Kontakt;
