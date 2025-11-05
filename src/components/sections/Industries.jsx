"use client";
import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();
  const items = [
    {
      title: t("ourIndustries.solarEnergy"),
      color: "#f7f0d5",
    },
    {
      title: t("ourIndustries.legalServices"),
      color: "#eadfce",
    },
    {
      title: t("ourIndustries.entertainment"),
      color: "#ffdfd4",
    },
    {
      title: t("ourIndustries.marketingServices"),
      color: "#bbd7ff",
    },
  ];

    return (
        <div
            id="industries"
            className="relative mx-auto text-center py-16 overflow-hidden"
        >
            <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none select-none h-[600px]">
                <img
                    src="/images/INDUSTRY.png"
                    alt=""
                    className="lg:w-full lg:h-full w-[100%] h-[80%] md:inline-block hidden"
                />
            </div>

            <div className="relative z-10 container p-[15px] flex flex-col gap-[50px]">
                <h3 className="font-bold sm:text-[50px] text-[25px] mb-8 text-black">
                    {t("ourIndustries.title")}
                </h3>
                <div className="flex flex-wrap lg:gap-x-10 md:gap-y-[100px] gap-y-[50px] gap-x-0 justify-center md:justify-between px-4">
                    {items.map((it, i) => (
                        <div
                            key={i}
                            className="lg:w-[45%] md:w-[45%] w-full text-black font-medium"
                        >
                            <div className="min-h-[50px] flex items-center justify-center md:justify-start">
                                <div className="relative group inline-flex items-center justify-center md:pl-[20px] pl-0 w-full md:w-auto">
                                    <div
                                        className="
                      absolute
                      left-1/2 md:left-0 top-1/2 -translate-y-1/2
                      -translate-x-1/2 md:translate-x-0
                      rounded-full
                      h-[80px] w-[80px]
                      md:h-[80px] md:w-[80px]
                      transition-all duration-500 ease-in-out
                      sm:group-hover:w-full w-full
                    "
                                        style={{ backgroundColor: it.color }}
                                    ></div>

                                    <span className="relative z-10 md:text-[23px] sm:text-[30px] text-[20px] px-6 text-center md:text-left w-full">
                    {it.title}
                  </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
