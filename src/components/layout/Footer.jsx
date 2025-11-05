"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Footer() {
  const { contact, social } = useSelector((state) => state.global);
  const { t, i18n } = useTranslation();
  function scrollToSection(section) {
    if (path === "/") {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${section}`);
    }
  }

  const images = {
    x: { src: "/icons/twitter.svg", title: "Twitter" },
    facebook: { src: "/icons/facebook.svg", title: "Facebook" },
    instagram: { src: "/icons/instagram.svg", title: "Instagram" },
    youtube: { src: "/icons/youtube.svg", title: "Youtube" },
    google: { src: "/icons/google_plus.svg", title: "Google+" },
    linkedin: { src: "/icons/linkedin.svg", title: "Linkedin" },
  };

  return (
    <section className="relative z-20 overflow-x-hidden overflow-y-visible">
      <img
        src="/images/footer_vector.png"
        alt=""
        className="w-full md:h-[65px] h-[45px]"
      />

      <footer className="bg-[#000] text-white relative z-20">
        <div
          className="container mx-auto flex justify-between flex-wrap gap-x-[10px] gap-y-[30px] "
          style={{ padding: "12px 30px" }}
        >
          <div className="flex flex-col gap-[30px] w-[100%] sm:w-[30%] sm:items-start items-center">
            {/* <h4 className="font-semibold text-[22px]">{t("footer.navigation")}</h4> */}
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

          <div className="flex flex-col gap-[30px] w-[100%] sm:w-[30%]  items-center">
            <h4 className="font-semibold text-[22px]">{t("getInTouch")}</h4>
            <div className="flex flex-col gap-[10px]">
              {contact?.address && (
                <div className="flex gap-2 sm:justify-start justify-center">
                  <img
                    src="/icons/location.svg"
                    alt=""
                    className="w-[20px] mb-3"
                    style={{ filter: "var(--iconGreen)" }}
                  />
                  <span>{contact?.address}</span>
                </div>
              )}

              {contact?.phone && (
                <div className="flex gap-2 sm:justify-start justify-center">
                  <img
                    src="/icons/phone.svg"
                    alt=""
                    className="w-[20px] mb-3"
                    style={{ filter: "var(--iconGreen)" }}
                  />
                  <span>{contact?.phone}</span>
                </div>
              )}

              {contact?.email && (
                <div className="flex gap-2 sm:justify-start justify-center">
                  <img
                    src="/icons/mail.svg"
                    alt=""
                    className="w-[20px] mb-3"
                    style={{ filter: "var(--iconGreen)" }}
                  />
                  <span>{contact?.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* <div className="flex flex-col gap-[30px]  w-[100%] sm:w-[48%] lg:w-[23%] sm:items-start items-center">
            <h4 className="font-semibold text-[22px] sm:text-left text-center">
              {t("footer.signUpForNewsLetter")}
            </h4>
            <input
              placeholder="Enter Your Email"
              className="px-[20px] py-[13px] w-full text-white border border-[var(--mainGreen)] rounded-4xl"
            />
            <button className="bg-[var(--mainGreen)] text-white px-8 py-3 rounded-3xl cursor-pointer hover:bg-green-800 transition-all">
              {t("buttons.subscribe")}
            </button>
          </div> */}

          <div className="flex flex-col gap-[30px] w-[100%]  sm:w-[30%] sm:items-end items-center">
            <h4 className="font-semibold  text-[22px]">{t("footer.followUs")}</h4>
            <div className="flex gap-4 flex-col">
              {social &&
                Object.keys(social).map((key) => {
                  const link = social[key];
                  const meta = images[key];

                  if (!link || !meta) return null;

                  return (
                    <Link
                      href={link}
                      key={key}
                      target="_blank"
                      className="flex gap-7"
                    >
                      <img
                        src={meta.src}
                        alt={meta.title}
                        className="w-6 h-6"
                        style={{ filter: "var(--iconGreen)" }}
                      />
                      <span className="text-white">{meta.title}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 text-center py-4 container">
          <p className="text-[#979797] text-sm">
            Copyright© 2025{" "}
            <span className="text-[var(--mainGreen)]">WELES GROUP.</span> All
            rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
