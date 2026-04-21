import React from "react";
import photo1 from "../../photos/photo1.jpg";
import photo2 from "../../photos/photo2.jpg";
import photo3 from "../../photos/photo3.jpg";
import photo4 from "../../photos/photo4.jpg";
import photo5 from "../../photos/photo5.png";
import photo6 from "../../photos/photo6.jpg";
import photo7 from "../../photos/photo7.jpg";

const About = (): React.JSX.Element => {
  return (
    <>
      {/* Szöveges szekció */}
      <style>{`
        @media (max-width: 768px) {
          .about-text-section {
            padding: 0 24px !important;
          }
        }
      `}</style>
      <section className="about-text-section" style={{
        width: "100%",
        minHeight: "834px",
        backgroundColor: "rgba(239, 208, 22, 0.08)",
        padding: "0 133px",
        boxSizing: "border-box",
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 700,
          fontSize: "110px",
          lineHeight: "140px",
          color: "rgba(239, 208, 22, 0.33)",
          margin: 0,
          userSelect: "none",
          pointerEvents: "none",
          width: "407px",
        }}>
          ABOUT US
        </h2>

        <p style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "20px",
          textAlign: "justify",
          color: "#000000",
          margin: "48px 0 0 0",
          paddingBottom: "80px",
        }}>
          A Szegedi Tudományegyetem Design- és művészetmenedzsment mesterszakos hallgatói minden évben megszervezik a Design és Művészetmenedzsment Fesztivált, amely idén immár hatodik alkalommal valósul meg. Minden évben nagy hangsúlyt fektetünk arra, hogy olyan témát válasszunk, amely nemcsak szakmailag releváns, hanem személyesen is közel áll hozzánk – 2026-ban ez az esélyegyenlőség.
          <br /><br />
          <br /><br />
          Fesztiválunk célja, hogy a design és a művészet eszközein keresztül reflektáljunk társadalmi kérdésekre, és teret adjunk a párbeszédnek. Hiszünk abban, hogy a kreativitás képes hidakat építeni különböző társadalmi csoportok között, és hozzájárulhat egy befogadóbb, nyitottabb közeg kialakításához. Ennek jegyében kiemelten foglalkozunk olyan témákkal és közösségekkel, mint a fogyatékkal élők, etnikai kisebbségek, hátrányos helyzetűek, az LMBTQ+ közösség és a nők helyzete a design és a művészet világában.
          A háromnapos fesztivál során szakmai előadások, workshopok, közös alkotási folyamatok és kulturális programok várják az érdeklődőket. Az első két nap során neves hazai szervezetek és alkotók mutatják be munkáikat és projektjeiket, míg a harmadik nap az együttműködésről és a közös élményről szól egy egész napos workshop keretében.
          <br /><br />
          <br /><br />
          Egy folyamatosan fejlődő, inspiráló platformként a fesztivál lehetőséget biztosít fiatal alkotók, hallgatók és szakemberek számára, hogy találkozzanak, kapcsolatokat építsenek és megosszák egymással gondolataikat. Különösen fontos számunkra a fiatal tehetségek támogatása és a hátrányos helyzetű alkotók bevonása, amelyben partnereink – például egyetemi programok és civil szervezetek – is segítségünkre vannak.
          A fesztivál mindenki számára nyitott és ingyenesen látogatható, hiszen célunk, hogy minél szélesebb közönséghez juttassuk el az üzenetünket: a művészet és a design nemcsak esztétikai élmény, hanem társadalmi változások motorja is lehet.
        </p>
      </section>

      {/* Képgaléria szekció */}
      <section style={{ backgroundColor: "#ffffff", padding: "40px 0 80px" }}>
        <div style={{
          position: "relative",
          maxWidth: "1440px",
          margin: "0 auto",
          aspectRatio: "1440 / 2396",
        }}>
          {/* photo1: jobb oldal, felül */}
          <img src={photo1} alt="Galéria 1" style={{
            position: "absolute",
            left: "43.75%", top: "1.59%",
            width: "50.07%", aspectRatio: "721/480",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />

          {/* photo2: bal oldal, kissé lejjebb */}
          <img src={photo2} alt="Galéria 2" style={{
            position: "absolute",
            left: "5.49%", top: "10.81%",
            width: "32.22%", aspectRatio: "464/309",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />

          {/* photo3: bal oldal */}
          <img src={photo3} alt="Galéria 3" style={{
            position: "absolute",
            left: "5.49%", top: "26.17%",
            width: "49.31%", aspectRatio: "710/473",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />

          {/* photo4: jobb oldal, álló */}
          <img src={photo4} alt="Galéria 4" style={{
            position: "absolute",
            left: "62.92%", top: "33.1%",
            width: "30.9%", aspectRatio: "445/667",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />

          {/* photo5: bal oldal */}
          <img src={photo5} alt="Galéria 5" style={{
            position: "absolute",
            left: "10.21%", top: "48.87%",
            width: "39.86%", aspectRatio: "574/383",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />

          {/* photo7: jobb oldal, széles */}
          <img src={photo7} alt="Galéria 6" style={{
            position: "absolute",
            left: "38.96%", top: "68.53%",
            width: "54.86%", aspectRatio: "790/527",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />

          {/* photo6: bal oldal, álló */}
          <img src={photo6} alt="Galéria 7" style={{
            position: "absolute",
            left: "5.63%", top: "71.91%",
            width: "24.51%", aspectRatio: "353/529",
            objectFit: "cover", borderRadius: "clamp(20px,4%,60px)",
          }} />
        </div>
      </section>
    </>
  );
};

export default About;
