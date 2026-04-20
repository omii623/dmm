import React from "react";
import { Link } from "react-router-dom";
import homeHero from "../../photos/homeHero.png";

const IMAGE_OVERFLOW = "38%";

export const Homepage = (): React.JSX.Element => {
  return (
    <section style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f0ebe0",
      overflow: "hidden",
      minHeight: "700px",
    }}>

      {/* Bal oldal – szöveg */}
      <div className="hero-text-box" style={{
        flex: "0 1 60%",
        padding: "60px 48px 60px 80px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        zIndex: 1,
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          color: "#561269",
          textAlign: "justify",
          textAlignLast: "left",
          lineHeight: "1.7",
          letterSpacing: "0.06em",
          wordSpacing: "0.2em",
          margin: 0,
        }}>
          IDÉN EGY SZÁMUNKRA FONTOS TÉMÁT ÁLLÍTUNK A KÖZÉPPONTBA:
          ESÉLYEGYENLŐSÉG A DESIGNBAN ÉS A MŰVÉSZETBEN.
          <br />
          OLYAN LOKÁLIS PARTNEREKKEL DOLGOZHATUNK EGYÜTT, AKIKNEK SEGÍTSÉGÉVEL
          TÖBB HÁTRÁNYOS HELYZETŰ HALLGATÓT IS BEVONHATUNK AZ ESEMÉNYBE:
          <br /><br />
          HÖOK MENTORPROGRAM
          <br />
          SZTE SANSZ IRODA
          <br /><br />
          A RENDEZVÉNYRE VALÓ BELÉPÉS INGYENES.
        </p>

        <Link
          to="/programok"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "180px",
            height: "64px",
            backgroundColor: "#561269",
            borderRadius: "16px",
            textDecoration: "none",
            fontFamily: "'Space Grotesk', Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "#ffffff",
            letterSpacing: "0.05em",
          }}
        >
          PROGRAMOK
        </Link>
      </div>

      {/* Jobb oldal – kép, IMAGE_OVERFLOW mértékben kicsúszik jobbra */}
      <div style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: `translateY(-50%) translateX(${IMAGE_OVERFLOW})`,
      }}>
        <img
          src={homeHero}
          alt="Fesztivál illusztráció"
          style={{
            height: "640px",
            width: "auto",
            display: "block",
          }}
        />
      </div>

    </section>
  );
};
