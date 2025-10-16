"use client";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true });

  return (
    <div id="about" className="container mx-auto flex gap-12 items-center md:items-start justify-between flex-col md:flex-row">
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
        <h2 className="text-3xl font-semibold">{about.title}</h2>
        <p className="mt-4 text-gray-600">{about.text}</p>
        <p className="mt-4 text-[#999999]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, fugit dolores. Odio quisquam eum, dolore in odit ut vero tempora nisi dolores voluptas maxime at autem reprehenderit deleniti, dolorum voluptatem, a totam ab nobis possimus impedit. Dolorem, itaque, possimus ducimus sint facere ad minus sunt ipsa esse error maiores eum temporibus voluptas voluptatum fuga illum voluptatem aliquam numquam laudantium quae sit eaque? Facere aliquam ullam at omnis voluptate fugiat explicabo deleniti corrupti quis blanditiis animi vitae, et maiores corporis consectetur iste quisquam recusandae optio ab qui? Sunt nemo vel, reiciendis asperiores, consectetur officiis, explicabo nulla necessitatibus perferendum earum </p>
        <button className="mt-6 bg-[#008e46] text-white px-6 py-2 rounded-3xl">
          Read More
        </button>
      </div>
    </div>
  );
}
