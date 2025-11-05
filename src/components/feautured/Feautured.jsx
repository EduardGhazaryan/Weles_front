"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export default function Feautured() {
  const { t } = useTranslation();
  const { contentSliders } = useSelector((state) => state.global);
  const items = t("hero", { returnObjects: true });
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  const handleClick = (type) => {
    clearInterval(intervalRef.current);

    setIdx((prev) => {
      if (type === "prev") {
        return (prev - 1 + items.length) % items.length;
      } else {
        return (prev + 1) % items.length;
      }
    });

    startAutoSlide();
  };

  return (
    <section
      className="  overflow-hidden bg-green-700"
      id="feautured"
    >
      {contentSliders?.length > 0 ? (
        <div
          // style={{
          //   backgroundImage: `url(${contentSliders[idx]?.bg_image || ""})`,
          // }}
          className="relative md:h-[420px] bg-no-repeat bg-cover bg-center"
        >

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white ">
            {/* <div className="container flex justify-center gap-[150px]">
              <div>
                <h1 className="sm:text-6xl text-2xl font-bold tracking-wider drop-shadow-lg">
                  {items[idx].title}
                </h1>
                <p className="mt-4 sm:text-xl text-[14px]">
                  {items[idx].subtitle}
                </p>
              </div>
            </div> */}
            <img src={contentSliders[idx]?.bg_image || ""} alt="" className="w-[100vw] h-full"/>

            <div className="hidden sm:flex gap-2 mt-6 absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-3 mt-6">
                {items.map((it, i) => (
                  <div
                    key={it.title}
                    onClick={() => {
                      clearInterval(intervalRef.current);
                      setIdx(i);
                      startAutoSlide();
                    }}
                    className={`
        w-[15px] h-[15px] rounded-full flex items-center justify-center cursor-pointer transition-all
        ${idx === i ? "border-2 border-green-500" : "bg-gray-400"}
      `}
                  >
                    {idx === i && (
                      <div className="w-[7px] h-[7px] rounded-full bg-green-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </section>
  );
}
