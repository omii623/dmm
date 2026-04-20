import React from "react";

const About = (): React.JSX.Element => {
  return (
    <section style={{
      width: "100%",
      minHeight: "834px",
      backgroundColor: "rgba(239, 208, 22, 0.08)",
      padding: "0 133px",
      boxSizing: "border-box",
    }}>

      {/* "about us" háttér felirat */}
      <h2 style={{
        fontFamily: "'Space Grotesk', Helvetica, sans-serif",
        fontWeight: 700,
        fontSize: "110px",
        lineHeight: "140px",
        color: "rgba(239, 208, 22, 0.33)",
        margin: 0,
        paddingTop: "0px",
        userSelect: "none",
        pointerEvents: "none",
        width: "407px",
      }}>
        ABOUT US
      </h2>

      {/* Leírás szöveg */}
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
  );
};

export default About;
