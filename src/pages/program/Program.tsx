import React from "react";

const days = [
  {
    label: "1 . NAP",
    venue: "JATE KLUB",
    events: [
      "9:00 Megnyitó",
      "9:30-11:30 Romani Design",
      "Ebéd Szünet",
      "13:00-14:30 Köves Bálint X KÉK",
      "15:00 Nemzetiségek Háza - Előadás ( Osztróvszky U. 6, Szeged)",
      "18:00 Art Brut Kiállítás Megnyitó + Kerekasztal Beszélgetés  ( Tiszatáj Szerkesztőségében)",
    ],
  },
  {
    label: "2 . NAP",
    venue: "JATE KLUB",
    events: [
      "10:00-11:30 SANSZ\nNem Látható Fogyatékosságok Akadálymentesítése",
      "Ebéd Szünet",
      "14:00-15:30 Akadálymentesítés A Múzeumban - Séta Szatmári Csillával",
      "18:00 Labrisz Egyesület- Filmvetítés (SZÜNET Kávézó)",
    ],
  },
  {
    label: "3 . NAP",
    venue: "TITKOS KERT",
    events: [
      "12:00-16:00 Retextil Workshop",
      "17:00 Macskatica Workshop",
      "",
      "Esti Batyusbál Támogatóinkkal",
    ],
  },
];

const Programok = (): React.JSX.Element => {
  return (
    <section style={{ backgroundColor: "rgba(239, 208, 22, 0.08)", minHeight: "80vh" }}>

      {/* Sárga fejléc sáv */}
      <div style={{
        backgroundColor: "#EFD016",
        padding: "20px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "1.5",
          color: "#561269",
          margin: 0,
        }}>
          VI. DESIGN ÉS MŰVÉSZETMENEDZSMENT FESZTIVÁL<br />
          2026. MÁJUS. 14-16
        </p>
      </div>

      {/* 3 oszlopos naptár */}
      <div className="program-grid" style={{
        display: "grid",
        gridTemplateColumns: "280px 280px 280px",
        gap: "0",
        padding: "40px 60px 80px",
        justifyContent: "center",
      }}>
        <style>{`
          @media (max-width: 900px) {
            .program-grid {
              grid-template-columns: 1fr !important;
              padding: 32px 24px 60px !important;
            }
            .program-grid > div {
              border-bottom: 1px solid rgba(86, 18, 105, 0.15);
              padding-bottom: 32px !important;
              margin-bottom: 8px;
            }
            .program-grid > div:last-child {
              border-bottom: none;
            }
          }
        `}</style>
        {days.map((day) => (
          <div key={day.label} style={{ padding: "0 24px" }}>

            {/* Nap pill */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
            }}>
              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "50px",
                padding: "12px 40px",
                display: "inline-block",
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#EFD016",
                }}>
                  {day.label}
                </span>
              </div>
            </div>

            {/* Helyszín */}
            <p style={{
              fontFamily: "'Space Grotesk', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "#561269",
              margin: "0 0 16px 0",
            }}>
              {day.venue}
            </p>

            {/* Programok */}
            {day.events.map((event, i) => (
              <p key={i} style={{
                fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "1.5",
                color: "#561269",
                margin: "0 0 16px 0",
                whiteSpace: "pre-line",
              }}>
                {event || "\u00A0"}
              </p>
            ))}

          </div>
        ))}
      </div>

    </section>
  );
};

export default Programok;
