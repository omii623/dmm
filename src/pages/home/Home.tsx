import React from "react";
import { Link } from "react-router-dom";
import homeHero from "../../photos/homeHero.webp";

export const Homepage = (): React.JSX.Element => {
  return (
    <>
      <style>{`
        .hero-section {
          display: block;
          background-color: #ffffff;
          overflow: hidden;
          padding: clamp(24px, 5vw, 60px);
          box-sizing: border-box;
        }

        .hero-text-col {
          display: block;
        }
        .hero-text-col > * {
          margin-bottom: clamp(12px, 2vw, 24px);
        }
        .hero-text-col > *:last-child {
          margin-bottom: 0;
        }

        /* Kép – float right */
        .hero-image-col {
          float: right;
          width: 650px;
          height: 650px;
          margin-right: -200px;
        }
        .hero-image-col img {
          width: 650px;
          height: 650px;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .hero-desktop-title {
          font-family: 'Space Grotesk', Helvetica, sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 4vw, 52px);
          line-height: 1.15;
          color: #EFD016;
          margin: 0;
          white-space: pre;
        }

        .hero-text {
          font-family: 'Space Grotesk', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #561269;
          text-align: left; /*>-justify*/
          text-align-last: left;
          line-height: 1.6;
          letter-spacing: 0.04em;
          word-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(130px, 15vw, 180px);
          height: clamp(44px, 6vh, 56px);
          background-color: #561269;
          border-radius: 12px;
          text-decoration: none;
          font-family: 'Space Grotesk', Helvetica, sans-serif;
          font-weight: 700;
          font-size: clamp(14px, 1.5vw, 18px);
          color: #ffffff;
          letter-spacing: 0.05em;
          align-self: flex-start;
        }

        /* Mobilos nézet – egymás alatt */
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            min-height: unset;
          }

          .hero-image-col {
            width: 650px;
            height: 650px;
            margin-right: clamp(-460px, calc(20.00vw - 640px), -200px);
          }
          .hero-image-col img {
            width: 650px;
            height: 650px;
            object-fit: contain;
          }
          .hero-btn {
            width: 140px;
            height: 42px;
            border-radius: 20px;
            font-size: 15px;
            font-weight: 400;
          }
        }

        @media (max-width: 550px) {
          .hero-text {
            font-size: 12px;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* Kép – float right, a szöveg köré öleli */}
        <div className="hero-image-col">
          <img src={homeHero} alt="Fesztivál illusztráció" />
        </div>

        {/* Szöveg – a kör köré folyik */}
        <div className="hero-text-col">
          <h1 className="hero-desktop-title">{`DESIGN ÉS\nMŰVÉSZETMENEDZSMENT\nFESZTIVÁL`}</h1>

          <p className="hero-text">
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
          <br /><br />
          <Link to="/programok" className="hero-btn">
            PROGRAMOK
          </Link>
        </div>

      </section>
    </>
  );
};
