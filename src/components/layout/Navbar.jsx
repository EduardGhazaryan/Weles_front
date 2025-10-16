"use client";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../../store/slices/langSlice";
import Image from "next/image";


export default function Navbar({ sections }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navRef = useRef(null);
  const { locale } = useSelector((state) => state.lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  let menuItems = [
    {
      id: 1,
      name: t("nav.about"),
      key: "about"
    },
    {
      id: 2,
      name: t("nav.industries"),
      key: "industries"
    },
    {
      id: 3,
      name: t("nav.blogs"),
      key: "blogs"
    },
    {
      id: 4,
      name: t("nav.branches"),
      key: "branches"
    },
    {
      id: 5,
      name: t("nav.contacts"),
      key: "contacts"
    },
  ]

  function changeLang(l) {
    i18n.changeLanguage(l);
    dispatch(setLocale(l));
  }

  function scrollToSection(section) {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="flex items-center justify-between py-4 container relative">
      <div>
        <img src="images/walesGreen.png" alt="" className="w-[200px]" />
      </div>
      <ul className="md:flex hidden lg:gap-6 gap-2 " ref={navRef}>
        {
          menuItems.map(item => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.key)} className="cursor-pointer hover:text-[var(--mainGreen)]">
                {item.name}
              </button>
            </li>
          ))
        }
        <li>
          <div className="flex gap-2 relative cursor-pointer">
            <div onClick={() => setIsOpen(!isOpen)}>
              {locale === "en" ? "ENG" : "ARM"}
            </div>
            <img src="icons/arrowDown.svg" alt="" className={`w-3 ${isOpen ? "rotate-180" : ""}`} />
            {
              isOpen ? (
                <div className="absolute top-[100%] left-0 bg-white z-30 w-full p-2 shadow-[0_7px_17px_#6b6b6b]">
                  <div onClick={() => {
                    changeLang("en")
                    setIsOpen(false)
                  }}>
                    ENG
                  </div>
                  <div onClick={() => {
                    changeLang("hy")
                    setIsOpen(false)
                  }}>
                    ARM
                  </div>
                </div>
              ) : ""
            }
          </div>
        </li>
      </ul>

      <div className="md:hidden ">
        <Image src="icons/burger_menu.svg" alt="" width={30} height={30} onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)} className={`cursor-pointer ${isOpenBurgerMenu ? "rotate-90" : ""} transition-all duration-200 ease-linear`} />

        {
          1 == 1 ? (
            <div className={`absolute top-[100%] bg-white z-100  p-2 shadow-[0_7px_17px_#6b6b6b] sm:w-[300px] w-full transition-all duration-300 ease-linear ${isOpenBurgerMenu ? "sm:right-1 right-0" : "-right-full"}`}>
              <ul className="flex flex-col items-center p-4 lg:gap-6 gap-6 " ref={navRef}>
                {
                  menuItems.map(item => (
                    <li key={item.id}>
                      <button onClick={() => {
                        scrollToSection(item.key)
                        setIsOpenBurgerMenu(false)
                        setIsOpen(false)
                        }} className="cursor-pointer hover:text-[var(--mainGreen)]">
                        {item.name}
                      </button>
                    </li>
                  ))
                }

                <li>
                  <div className="flex gap-2 relative cursor-pointer">
                    <div onClick={() => setIsOpen(!isOpen)}>
                      {locale === "en" ? "ENG" : "ARM"}
                    </div>
                    <img src="icons/arrowDown.svg" alt="" className={`w-3 ${isOpen ? "rotate-180" : ""}`} />
                    {
                      isOpen ? (
                        <div className="absolute top-[100%] left-0 bg-white z-30 w-full p-2 shadow-[0_7px_17px_#6b6b6b]">
                          <div onClick={() => {
                            changeLang("en")
                            setIsOpen(false)
                          }}>
                            ENG
                          </div>
                          <div onClick={() => {
                            changeLang("hy")
                            setIsOpen(false)
                          }}>
                            ARM
                          </div>
                        </div>
                      ) : ""
                    }
                  </div>
                </li>
              </ul>
            </div>
          ) : ""
        }

      </div>
    </nav>
  );
}
