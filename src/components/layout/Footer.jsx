"use client";
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
    <section className="relative z-20 overflow-x-hidden overflow-y-visible">
      
      {/* <div className="relative lg:top-[110px] top-[111px]  h-[120px] z-10 bg-[var(--darkGreen)] footer-second-wave   lg:left-[7px] sm:-left-[8px] left-[-14px] xl:w-[98%] lg:w-[100%] sm:w-[100%] w-[104%]  "></div>
      <div className="relative bottom-[100%]  h-[130px] z-10 bg-black footer-wave  -left-15 xl:w-[107%] md:w-[112%] sm:w-[114%] w-[118%] "></div> */}

      <img src="images/footer_vector.png" alt="" className="w-full md:h-[65px] h-[45px]" />

      <footer className="bg-[#000] text-white relative z-20">
        <div className="container mx-auto flex justify-between flex-wrap gap-x-[10px] gap-y-[30px] " style={{padding: "12px 30px"}}>
          <div className="flex flex-col gap-[30px] w-[100%] sm:w-[48%] lg:w-[23%] sm:items-start items-center">
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

          <div className="flex flex-col gap-[30px] w-[100%] sm:w-[48%] lg:w-[23%] sm:items-start items-center">
            <h4 className="font-semibold text-[22px]">Contact Us</h4>
            <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2 sm:justify-start justify-center">
              <img
                src="icons/location.svg"
                alt=""
                className="w-[20px] mb-3"
                style={{ filter: "var(--iconGreen)" }}
              />
              <span>Prospekt 52/74, Liberec, 180 00</span>
            </div>
            <div className="flex gap-2 sm:justify-start justify-center">
              <img
                src="icons/phone.svg"
                alt=""
                className="w-[20px] mb-3"
                style={{ filter: "var(--iconWhite)" }}
              />
              <span>+420 000 000 000</span>
            </div>
            <div className="flex gap-2 sm:justify-start justify-center">
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

          <div className="flex flex-col gap-[30px]  w-[100%] sm:w-[48%] lg:w-[23%] sm:items-start items-center">
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

          <div className="flex flex-col gap-[30px] w-[100%] sm:w-[48%] lg:w-[23%] sm:items-start items-center">
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
