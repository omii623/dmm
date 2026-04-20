import React from "react";
import feketeLogo from "../../photos/feketeLogo.png";

const navigationItems = [
  { label: "HOME", href: "#home" },
  { label: "PROGRAMOK", href: "#programok" },
  { label: "KONTAKT", href: "#kontakt" },
  { label: "RÓLUNK", href: "#rolunk" },
];

const Header = (): React.JSX.Element => {
  return (
    <header className="flex w-full max-w-[1440px] h-[182px] items-center gap-[30px] px-[22px] py-0 relative bg-white mx-auto border-b border-gray-200">
      <div className="flex w-[185px] h-[93px] items-center gap-2.5 relative bg-white overflow-hidden shrink-0">
        <div className="relative w-[191px] h-[191px] mt-[-49px] mb-[-49px] aspect-square">
          <img
            className="absolute w-full h-[74.35%] top-[25.65%] left-0 object-cover"
            alt="DMM logó"
            src={feketeLogo}
          />
        </div>
      </div>

      <div className="flex items-center flex-1 min-w-0">
        <h1 className="font-['Space_Grotesk',Helvetica] font-bold text-[#efd016] text-[32px] tracking-[0] leading-normal whitespace-nowrap">
          DESIGN ÉS MŰVÉSZETMENEDZSMENT FESZTIVÁL
        </h1>
      </div>

      <nav
        aria-label="Fő navigáció"
        className="flex flex-col items-end justify-center gap-0 shrink-0"
      >
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-['Space_Grotesk',Helvetica] font-bold text-black text-[32px] text-right leading-tight tracking-[0] hover:text-[#efd016] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
