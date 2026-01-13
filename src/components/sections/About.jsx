"use client";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocalized } from "@/utils/useLocalized";

export default function About() {
  const { t } = useTranslation();
  const { about } = useSelector((state) => state.global);
  const { get } = useLocalized();

  return (
    <div
      id="about"
      className="container mx-auto flex gap-12 items-center md:items-start justify-between flex-col md:flex-row"
    >
      <div className="lg:w-1/3 md:w-[50%] w-full">
        <div className="rounded-full overflow-hidden xl:w-100 xl:h-100 lg:w-80 lg:h-80 w-60 h-60 mx-auto  shadow-lg">
          <img
            src="/images/w22.png"
            alt="office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:w-2/3 md:w-[100%] w-[100%] p-5">
        <h2 className="text-3xl font-semibold">{get(about, "title")}</h2>
        <div
          className="mt-4 text-gray-600 space-y-3"
          dangerouslySetInnerHTML={{ __html: get(about, "text") }}
        ></div>
      </div>
    </div>
  );
}
