import N1 from "./441157374-122097359096322465-3645757853890347994-n-1.png";
import x10000185091 from "./1000018509-1.png";
import borpontLogoUj11 from "./borpont-logo-uj-1-1.png";
import btk1 from "./btk-1.png";
import feketeLogo from "./fekete-logo.png";
import image01 from "./image0-1.png";
import images1 from "./images-1.png";
import ogImage1 from "./og-image-1.png";
import szunet0001Fekete1 from "./szunet-0001-fekete-1.png";
import ttLogo21 from "./tt-logo2-1.png";
import VIDmmFesztivLSzponzorCiSCsomagVGleges1 from "./VI-DMM-fesztiv-l-szponzor-ci-s-csomag-v-gleges-1.png";
import type { JSX } from "react";

const navigationItems = ["HOME", "PROGRAMOK", "KONTAKT", "RÓLUNK"];

const scheduleDays = [
  {
    titleImage: VIDmmFesztivLSzponzorCiSCsomagVGleges1,
    titleImageAlt: "Vi DMM fesztivál program",
    columns: [
      {
        heading: "Jate Klub",
        entries: [
          "9:00 Megnyitó",
          "9:30-11:30 Romani Design",
          "ebéd Szünet",
          "13:00-14:30 Köves Bálint X Kék",
          "15:00 Nemzetiségek Háza - Előadás ( Osztróvszky U. 6, Szeged)",
          "18:00 Art Brut Kiállítás Megnyitó + Kerekasztal Beszélgetés  ( Tiszatáj Szerkesztőségében)",
        ],
        widthClass: "w-[360px]",
        extraClass: "mb-[-31.00px]",
      },
      {
        heading: "Jate Klub",
        entries: [
          "10:00-11:30 Sansz",
          "nem Látható Fogyatékosságok Akadálymentesítése",
          "ebéd Szünet",
          "14:00-15:30 Akadálymentesítés A Múzeumban - Séta Szatmári Csillával",
          "18:00 Labrisz Egyesület- Filmvetítés (szünet Kávézó)",
        ],
        widthClass: "w-[378px]",
        extraClass: "",
      },
      {
        heading: "Titkos Kert",
        entries: [
          "12:00-16:00 Retextil Workshop",
          "17:00 Macskatica Workshop",
          "esti Batyusbál Támogatóinkal",
        ],
        widthClass: "w-[246px]",
        extraClass: "",
      },
    ],
  },
];

const supporterLogos = [
  {
    type: "image",
    src: szunet0001Fekete1,
    alt: "Szunet fekete",
    className: "relative w-[103px] h-[70px] aspect-[1.47] object-cover",
  },
  {
    type: "bg",
    className:
      "flex flex-col w-[114px] h-[70px] items-center justify-center gap-[58px] px-3.5 py-0 relative",
    innerClassName:
      "relative w-40 h-[90px] mt-[-10.00px] mb-[-10.00px] ml-[-37.00px] mr-[-37.00px] aspect-[1.78] bg-[url(/SZTE-PHI-logos-kf-v19-1.png)] bg-cover bg-[50%_50%]",
  },
  {
    type: "image",
    src: btk1,
    alt: "Btk",
    className: "relative w-[70px] h-[70px] aspect-[1] object-cover",
  },
  {
    type: "bg",
    className:
      "flex flex-col w-[100px] h-[52px] items-center justify-center gap-2.5 relative",
    innerClassName:
      "relative self-stretch w-full aspect-[2.6] bg-[url(/unnamed-1.png)] bg-cover bg-[50%_50%]",
  },
  {
    type: "image",
    src: N1,
    alt: "Element",
    className: "relative w-[86px] h-[100px] aspect-[0.78]",
  },
  {
    type: "image",
    src: images1,
    alt: "Images",
    className: "relative w-[66px] h-[66px] aspect-[1] object-cover",
  },
  {
    type: "image",
    src: ttLogo21,
    alt: "Tt",
    className: "relative w-[86px] h-[66px] aspect-[1.31] object-cover",
  },
  {
    type: "image",
    src: ogImage1,
    alt: "Og image",
    className: "relative w-[88px] h-[100px] aspect-[0.8]",
  },
  {
    type: "image",
    src: borpontLogoUj11,
    alt: "Borpont logo uj",
    className: "relative w-[125px] h-[30px] aspect-[4.19] object-cover",
  },
];

const partnerLogos = [
  {
    src: x10000185091,
    alt: "Element",
    className: "relative w-[109px] h-[50px] aspect-[2.17] object-cover",
  },
  {
    src: image01,
    alt: "Image",
    className: "relative w-[137px] h-[53px] aspect-[2.58] object-cover",
  },
];

export const TervezettProgram = (): JSX.Element => {
  return (
    <main className="flex flex-col h-[1238px] items-start relative bg-white">
      <header className="flex w-[1440px] h-[181px] items-center gap-[30px] px-[22px] py-0 relative bg-white">
        <div className="flex w-[185px] h-[93px] items-center gap-2.5 relative bg-white overflow-hidden">
          <div className="relative w-[191px] h-[191px] mt-[-49.00px] mb-[-49.00px] aspect-[1]">
            <img
              className="absolute w-full h-[74.35%] top-[25.65%] left-0 object-cover"
              alt="Fekete logo"
              src={feketeLogo}
            />
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
          <h1 className="relative w-[864px] h-[45px] mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#efd016] text-[32px] tracking-[0] leading-[normal]">
            DESIGN ÉS MŰVÉSZETMENEDZSMENT FESZTIVÁL
          </h1>
        </div>
        <nav
          aria-label="Fő navigáció"
          className="flex flex-col w-[265px] h-[177px] items-end justify-center px-[3px] py-0 relative bg-white"
        >
          {navigationItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative w-fit [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-black text-[32px] text-right tracking-[0] leading-[normal]"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
      <section className="flex h-[126px] items-center justify-around px-[568px] py-0 relative self-stretch w-full bg-[#efd016]">
        <p className="relative w-fit ml-[-134.00px] mr-[-134.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#561269] text-2xl text-center tracking-[0] leading-[normal]">
          VI. DESIGN ÉS MŰVÉSZETMENEDZSMENT FESZTIVÁL
          <br />
          2026. MÁJUS. 14-16
        </p>
      </section>
      {scheduleDays.map((day) => (
        <section
          key={day.titleImageAlt}
          className="flex flex-wrap h-[731px] items-start justify-center gap-[42px_120px] px-[47px] py-10 relative self-stretch w-full bg-[#efd01614] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
        >
          <img
            className="relative w-[1255px] h-[83px] aspect-[15.17] object-cover"
            alt={day.titleImageAlt}
            src={day.titleImage}
          />
          {day.columns.map((column, index) => (
            <section
              key={`${column.heading}-${index}`}
              className={`relative ${column.widthClass} ${column.extraClass} [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#561269] text-2xl tracking-[0] leading-[normal]`}
            >
              <h2 className="inline [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#561269] text-2xl tracking-[0] leading-[normal]">
                {column.heading}
              </h2>
              <br />
              <br />
              {column.entries.map((entry, entryIndex) => (
                <span key={`${entry}-${entryIndex}`}>
                  {entry}
                  {entryIndex < column.entries.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </section>
          ))}
        </section>
      ))}

      <footer className="relative w-[1440px] h-[199.39px] overflow-hidden">
        <section className="flex w-full h-[100px] items-center justify-center gap-8 px-1.5 py-0 absolute top-0 left-0 bg-white aspect-[14.4]">
          <h2 className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#561269] text-xl tracking-[0] leading-[normal]">
            Támogatóink
          </h2>
          {supporterLogos.map((logo, index) =>
            logo.type === "image" ? (
              <img
                key={`${logo.alt}-${index}`}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ) : (
              <div key={`supporter-bg-${index}`} className={logo.className}>
                <div className={logo.innerClassName} aria-hidden="true" />
              </div>
            ),
          )}
        </section>
        <section className="absolute top-[100px] left-0 w-[1440px] h-[100px] flex">
          <div className="flex mt-0 w-[1440px] h-[100px] ml-0 relative items-center justify-between px-[220px] py-0 bg-white aspect-[14.4]">
            <h2 className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#561269] text-xl tracking-[0] leading-[normal]">
              Együttműködőink
            </h2>
            {partnerLogos.map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ))}

            <div
              className="relative w-[103px] h-[70px] aspect-[1.47]"
              aria-hidden="true"
            />
          </div>
        </section>
      </footer>
    </main>
  );
};
