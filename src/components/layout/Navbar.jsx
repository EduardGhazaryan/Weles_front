"use client";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLocale } from "../../store/slices/langSlice";

export default function Navbar({ sections }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navRef = useRef(null);

  function changeLang(l) {
    i18n.changeLanguage(l);
    dispatch(setLocale(l));
  }

  function scrollToSection(section) {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="flex items-center justify-between py-4 container">
      <div>
        <img src="images/walesGreen.png" alt="" className="w-[200px]" />
      </div>
      <ul className="flex gap-6" ref={navRef}>
        <li>
          <button onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-[var(--mainGreen)]">
            {t("nav.about")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("industries")} className="cursor-pointer hover:text-[var(--mainGreen)]">
            {t("nav.industries")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("blogs")} className="cursor-pointer hover:text-[var(--mainGreen)]">
            {t("nav.blogs")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("branches")} className="cursor-pointer hover:text-[var(--mainGreen)]">
            {t("nav.branches")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contacts")} className="cursor-pointer hover:text-[var(--mainGreen)]">
            {t("nav.contacts")}
          </button>
        </li>
        <li>
          <select
            onChange={(e) => changeLang(e.target.value)}
            defaultValue={i18n.language}
          >
            <option value="en">EN</option>
            <option value="hy">HY</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
