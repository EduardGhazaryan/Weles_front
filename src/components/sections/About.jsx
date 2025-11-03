"use client";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function About() {
  const { t } = useTranslation();
  // const about = t("about", { returnObjects: true });
  const { about } = useSelector((state) => state.global);

  return (
    <div
      id="about"
      className="container mx-auto flex gap-12 items-center md:items-start justify-between flex-col md:flex-row"
    >
      <div className="lg:w-1/3 md:w-[50%] w-full">
        <div className="rounded-full overflow-hidden xl:w-100 xl:h-100 lg:w-80 lg:h-80 w-60 h-60 mx-auto  shadow-lg">
          <img
            src="/images/office.jpg"
            alt="office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:w-2/3 md:w-[100%] w-[100%] p-5">
        <h2 className="text-3xl font-semibold">{about?.title_am}</h2>
        <div
          className="mt-4 text-gray-600 space-y-3"
          dangerouslySetInnerHTML={{ __html: about?.text_am }}
        ></div>
      </div>
    </div>
  );
}
