"use client";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocalized } from "@/utils/useLocalized";

export default function HeroCarousel() {
  const { t } = useTranslation();
  const { heroBanners, loading } = useSelector((state) => state.global);
  const { get } = useLocalized();
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const handleClick = (type) => {
    clearInterval(intervalRef.current);

    setIdx((prev) => {
      if (type === "prev") {
        return (prev - 1 + heroBanners.length) % heroBanners.length;
      } else {
        return (prev + 1) % heroBanners.length;
      }
    });
  };

  return (
    <section className="relative xl:h-[720px] md:h-[600px] h-[400px]  ">
      {heroBanners?.length > 0 && (
        <>
          <div
            className="absolute z-10 xl:h-[720px] md:h-[600px] h-[400px] hero-wave overflow-hidden bg-green-200 bg-no-repeat bg-cover bg-center top-0 -left-10 xl:w-[104%] md:w-[106%] sm:w-[109%] w-[118%] "
            style={{ backgroundImage: `url(${heroBanners[idx]?.bg_image || ""})` }}
          ></div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white sm:p-6 ">
            <div className="container flex justify-between xl:gap-[150px]">
              <button onClick={() => handleClick("next")}>
                <img
                  src="icons/left_circle.svg"
                  alt=""
                  className="w-9"
                  style={{ filter: "var(--iconWhite)" }}
                />
              </button>

              <button onClick={() => handleClick("next")}>
                <img
                  src="icons/right_circle.svg"
                  alt=""
                  className="w-9"
                  style={{ filter: "var(--iconWhite)" }}
                />
              </button>
            </div>

            <div className="flex gap-2 mt-6 absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-3 mt-6">
                {heroBanners?.map((it, i) => (
                  <div
                    key={it.id || i}
                    onClick={() => {
                      clearInterval(intervalRef.current);
                      setIdx(i);
                    }}
                    className={`w-[15px] h-[15px] rounded-full flex items-center justify-center cursor-pointer transition-all ${idx === i ? "border-2 border-white" : "bg-gray-400"}`}
                  >
                    {idx === i && (
                      <div className="w-[7px] h-[7px] rounded-full bg-green-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {loading && (
        <div className="h-[400px] flex items-center justify-center">
          <img src="/images/spinner.gif" alt="" className="w-[70px] h-[70px]" />
        </div>
      )}
    </section>
  );
}
