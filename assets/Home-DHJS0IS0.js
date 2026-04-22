import{c as h,j as n,L as m}from"./index-BMJhlPgS.js";const x="/dmm/assets/homeHero-CDwFRJ5i.webp",f=()=>{const e=h.c(8);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("style",{children:`
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
      `}),e[0]=t):t=e[0];let i;e[1]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("div",{className:"hero-image-col",children:n.jsx("img",{src:x,alt:"Fesztivál illusztráció",fetchPriority:"high"})}),e[1]=i):i=e[1];let o;e[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx("h1",{className:"hero-desktop-title",children:`DESIGN ÉS
MŰVÉSZETMENEDZSMENT
FESZTIVÁL`}),e[2]=o):o=e[2];let r;e[3]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("br",{}),e[3]=r):r=e[3];let l,s;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("br",{}),s=n.jsx("br",{}),e[4]=l,e[5]=s):(l=e[4],s=e[5]);let c;e[6]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("br",{}),e[6]=c):c=e[6];let a;return e[7]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsxs(n.Fragment,{children:[t,n.jsxs("section",{className:"hero-section",children:[i,n.jsxs("div",{className:"hero-text-col",children:[o,n.jsxs("p",{className:"hero-text",children:["IDÉN EGY SZÁMUNKRA FONTOS TÉMÁT ÁLLÍTUNK A KÖZÉPPONTBA: ESÉLYEGYENLŐSÉG A DESIGNBAN ÉS A MŰVÉSZETBEN.",r,"OLYAN LOKÁLIS PARTNEREKKEL DOLGOZHATUNK EGYÜTT, AKIKNEK SEGÍTSÉGÉVEL TÖBB HÁTRÁNYOS HELYZETŰ HALLGATÓT IS BEVONHATUNK AZ ESEMÉNYBE:",l,s,"HÖOK MENTORPROGRAM",c,"SZTE SANSZ IRODA",n.jsx("br",{}),n.jsx("br",{}),"A RENDEZVÉNYRE VALÓ BELÉPÉS INGYENES."]}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(m,{to:"/programok",className:"hero-btn",children:"PROGRAMOK"})]})]})]}),e[7]=a):a=e[7],a};export{f as Homepage};
