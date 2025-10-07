import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer({ sections }) {
  const { t, i18n } = useTranslation();
  function scrollToSection(section) {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  }

  let images = [
    {
      src: "icons/twitter.svg",
      link: "https://x.com/",
      title : "Twitter",
    },
    {
      src: "icons/facebook.svg",
      link: "https://www.facebook.com/",
      title : "Facebook",
    },
    {
      src: "icons/instagram.svg",
      link: "https://www.instagram.com/",
      title : "Instagram",
    },
    {
      src: "icons/youtube.svg",
      link: "https://www.youtube.com/",
      title : "Youtube",
    },
    {
      src: "icons/google_plus.svg",
      link: "https://www.youtube.com/",
      title : "Google+",
    },
  ];
  return (
    <section className="relative z-20">
      {/* --- Top Half Circle SVG --- */}
      <div className="absolute top-0 left-0 w-full z-0 bg-green-800 rounded-t-[100%] h-[212px]"></div>
      <div className="absolute top-0 left-0 w-full z-10"></div>
      <div className="relative w-full">
        <svg
          className="w-full"
          viewBox="20 20 1840 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="footerGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00A651" />
              <stop offset="100%" stopColor="#013220" />
            </linearGradient>
          </defs>

          <path d="M0,150 C0,00 1810,0 1900,150 Z" fill="#000" />
        </svg>
      </div>

      {/* --- Footer Content --- */}
      <footer className="bg-[#000] text-white relative z-20">
        <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-[30px]">
            <h4 className="font-semibold text-[22px]">Navigation</h4>
            <ul className="text-sm space-y-2 flex flex-col gap-[10px]">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="cursor-pointer hover:text-[var(--mainGreen)]"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="cursor-pointer hover:text-[var(--mainGreen)]"
                >
                  {t("nav.industries")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blogs")}
                  className="cursor-pointer hover:text-[var(--mainGreen)]"
                >
                  {t("nav.blogs")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("branches")}
                  className="cursor-pointer hover:text-[var(--mainGreen)]"
                >
                  {t("nav.branches")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacts")}
                  className="cursor-pointer hover:text-[var(--mainGreen)]"
                >
                  {t("nav.contacts")}
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h4 className="font-semibold text-[22px]">Contact Us</h4>
            <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2">
              <img
                src="icons/location.svg"
                alt=""
                className="w-[20px] mb-3"
                style={{ filter: "var(--iconGreen)" }}
              />
              <span>Prospekt 52/74, Liberec, 180 00</span>
            </div>
            <div className="flex gap-2">
              <img
                src="icons/phone.svg"
                alt=""
                className="w-[20px] mb-3"
                style={{ filter: "var(--iconWhite)" }}
              />
              <span>+420 000 000 000</span>
            </div>
            <div className="flex gap-2">
              <img
                src="icons/mail.svg"
                alt=""
                className="w-[20px] mb-3"
                style={{ filter: "var(--iconWhite)" }}
              />
              <span>eg@weles.global</span>
            </div>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] items-start">
            <h4 className="font-semibold text-[22px]">
              Sign Up for Newsletter
            </h4>
            <input
              placeholder="Enter Your Email"
              className="px-[20px] py-[13px] w-full text-white border border-[var(--mainGreen)] rounded-4xl"
            />
            <button className="bg-[var(--mainGreen)] text-white px-8 py-3 rounded-3xl cursor-pointer hover:bg-green-800 transition-all">
              Subscribe Now
            </button>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h4 className="font-semibold  text-[22px]">Follow Us</h4>
            <div className="flex gap-4 flex-col">
          {
        images.map((it, i) => (
            <Link href={it.link} key={i} target="_blank" className="flex gap-7"> <img src={it.src} alt="" className="w-6 h-6 " style={{filter: "var(--iconWhite)"}}/> <span className="text-white">{it.title}</span> </Link>
        ))
    }
        </div>
          </div>
        </div>

        <div className="border-t border-white/20 text-center py-4 container">
          <p className="text-[#979797] text-sm">Copyright© 2025 <span className="text-[var(--mainGreen)]">WELES GROUP.</span> All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
