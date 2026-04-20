import N1 from "./441157374-122097359096322465-3645757853890347994-n-1.png";
import x10000185091 from "./1000018509-1.png";
import borpontLogoUj11 from "./borpont-logo-uj-1-1.png";
import btk1 from "./btk-1.png";
import designFeszt21 from "./design-feszt-2-1.png";
import feketeLogo from "./fekete-logo.png";
import image01 from "./image0-1.png";
import images1 from "./images-1.png";
import ogImage1 from "./og-image-1.png";
import szunet0001Fekete1 from "./szunet-0001-fekete-1.png";
import ttLogo21 from "./tt-logo2-1.png";
import type { JSX } from "react";

const navigationItems = [
  { label: "HOME", href: "#home" },
  { label: "PROGRAMOK", href: "#programok" },
  { label: "KONTAKT", href: "#kontakt" },
  { label: "RÓLUNK", href: "#rolunk" },
];

const supporterLogos = [
  {
    type: "image",
    src: szunet0001Fekete1,
    alt: "Szünet logó",
    className: "relative w-[103px] h-[70px] aspect-[1.47] object-cover",
  },
  {
    type: "background",
    alt: "SZTE BTK Filozófia Tanszék logó",
    wrapperClassName:
      "flex flex-col w-[114px] h-[70px] items-center justify-center gap-[58px] px-3.5 py-0 relative",
    className:
      "relative w-40 h-[90px] mt-[-10.00px] mb-[-10.00px] ml-[-37.00px] mr-[-37.00px] aspect-[1.78] bg-[url(/SZTE-PHI-logos-kf-v19-1.png)] bg-cover bg-[50%_50%]",
  },
  {
    type: "image",
    src: btk1,
    alt: "BTK logó",
    className: "relative w-[70px] h-[70px] aspect-[1] object-cover",
  },
  {
    type: "background",
    alt: "JATE Klub logó",
    wrapperClassName:
      "flex flex-col w-[100px] h-[52px] items-center justify-center gap-2.5 relative",
    className:
      "relative self-stretch w-full aspect-[2.6] bg-[url(/unnamed-1.png)] bg-cover bg-[50%_50%]",
  },
  {
    type: "image",
    src: N1,
    alt: "Leporello logó",
    className: "relative w-[86px] h-[100px] aspect-[0.78]",
  },
  {
    type: "image",
    src: images1,
    alt: "Könyvudvar logó",
    className: "relative w-[66px] h-[66px] aspect-[1] object-cover",
  },
  {
    type: "image",
    src: ttLogo21,
    alt: "Fekete Ház logó",
    className: "relative w-[86px] h-[66px] aspect-[1.31] object-cover",
  },
  {
    type: "image",
    src: ogImage1,
    alt: "Agora logó",
    className: "relative w-[88px] h-[100px] aspect-[0.8]",
  },
  {
    type: "image",
    src: borpontLogoUj11,
    alt: "Borpont logó",
    className: "relative w-[125px] h-[30px] aspect-[4.19] object-cover",
  },
];

const partnerLogos = [
  {
    src: x10000185091,
    alt: "SANSZ logó",
    className: "relative w-[109px] h-[50px] aspect-[2.17] object-cover",
  },
  {
    src: image01,
    alt: "HÖOK Mentorprogram logó",
    className: "relative w-[137px] h-[53px] aspect-[2.58] object-cover",
  },
];

export const Homepage = (): JSX.Element => {
  return (
    <main
      id="home"
      className="flex flex-col h-[1117px] items-start relative bg-white overflow-hidden"
    >
      <header className="flex w-[1440px] h-[182px] items-center gap-[30px] px-[22px] py-0 relative">
        <div className="flex w-[185px] h-[93px] items-center gap-2.5 relative bg-white overflow-hidden">
          <div className="relative w-[191px] h-[191px] mt-[-49.00px] mb-[-49.00px] aspect-[1]">
            <img
              className="absolute w-full h-[74.35%] top-[25.65%] left-0 object-cover"
              alt="DMM logó"
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
          {navigationItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative w-fit [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal] ${
                index !== 1 ? "text-right" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <section
        aria-labelledby="festival-lead"
        className="relative self-stretch w-full bg-[#efd01614] backdrop-blur-[50.0px] backdrop-brightness-[108.0%] backdrop-saturate-[100.0%] backdrop-hue-rotate-[10.0deg] [-webkit-backdrop-filter:blur(50.0px)_brightness(108.0%)_saturate(100.0%)_hue-rotate(10.0deg)] aspect-[1.96]"
      >
        <div className="top-16 right-[535px] w-[787px] h-[438px] flex-col gap-[33px] absolute flex">
          <p
            id="festival-lead"
            className="self-end mr-0.5 w-[785px] h-[313px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#561269] text-xl text-justify tracking-[0] leading-[normal]"
          >
            IDÉN EGY SZÁMUNKRA FONTOS TÉMÁT ÁLLÍTUNK A KÖZÉPPONTBA:
            ESÉLYEGYENLŐSÉG A DESIGNBAN ÉS A MŰVÉSZETBEN.
            <br />
            OLYAN LOKÁLIS PARTNEREKKEL DOLGOZHATUNK EGYÜTT, AKIKNEK SEGÍTSÉGÉVEL
            TÖBB HÁTRÁNYOS HELYZETŰ HALLGATÓT IS BEVONHATUNK AZ ESEMÉNYBE:
            <br />
            <br />
            HÖOK MENTORPROGRAM
            <br />
            SZTE SANSZ IRODA
            <br />
            <br />A RENDEZVÉNYRE VALÓ BELÉPÉS INGYENES.
          </p>
          <a
            href="#programok"
            className="all-[unset] box-border ml-1 w-[205px] h-[92px] relative cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#561269]"
            aria-label="Ugrás a programok szakaszhoz"
          >
            <span className="absolute w-[102.91%] h-[80.68%] top-[3.41%] left-[-2.71%] bg-[#561269] rounded-[20px]" />
            <span className="absolute w-[69.90%] h-[33.70%] top-[25.05%] left-[13.10%] [-webkit-text-stroke:1px_#561269] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              PROGRAMOK
            </span>
          </a>
        </div>
        <img
          className="absolute top-8 left-[903px] w-[537px] h-[698px] aspect-[1.24]"
          alt="Design és művészetmenedzsment fesztivál illusztráció"
          src={designFeszt21}
        />
      </section>
      <section
        className="relative w-[1440px] h-[199.39px] overflow-hidden"
        aria-label="Partnerek és támogatók"
      >
        <div className="w-full justify-center gap-8 px-1.5 py-0 absolute top-0 left-0 flex h-[100px] items-center bg-white aspect-[14.4]">
          <h2 className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#561269] text-xl tracking-[0] leading-[normal]">
            Támogatóink
          </h2>
          {supporterLogos.map((logo) => {
            if (logo.type === "background") {
              return (
                <div
                  key={logo.alt}
                  className={logo.wrapperClassName}
                  role="img"
                  aria-label={logo.alt}
                >
                  <div className={logo.className} />
                </div>
              );
            }

            return (
              <img
                key={logo.alt}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            );
          })}
        </div>
        <div className="top-[100px] left-0 w-[1440px] h-[100px] absolute flex">
          <div className="mt-0 w-[1440px] ml-0 relative justify-between px-[220px] py-0 flex h-[100px] items-center bg-white aspect-[14.4]">
            <h2 className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#561269] text-xl tracking-[0] leading-[normal]">
              Együttműködőink
            </h2>
            {partnerLogos.map((logo) => (
              <img
                key={logo.alt}
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
        </div>
      </section>
      <section id="programok" className="sr-only" aria-hidden="true" />
      <section id="kontakt" className="sr-only" aria-hidden="true" />
      <section id="rolunk" className="sr-only" aria-hidden="true" />
    </main>
  );
};
