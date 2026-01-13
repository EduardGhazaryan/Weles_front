"use client"
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/utils/useLocalized";

export default function BlogItem({ blog }) {
  const { t } = useTranslation();
  const { get } = useLocalized();
  return (
    <div className="mb-12 border-b border-gray-200 pb-8">
      {blog.image && (
        <img
          src={blog?.image}
          alt={get(blog, "title")}
          className="w-full rounded-lg mb-4"
        />
      )}

      {/* <p className="text-gray-500 text-sm mb-2">
        {blog.date} | by{" "}
        <span className="text-green-600 font-medium">{blog.author}</span> |{" "}
        <a href="#" className="text-green-600 underline">
          {blog.comments} comments
        </a>
      </p> */}

      <h2 className="sm:text-2xl text-[18px] font-bold mb-3">{get(blog, "title")}</h2>

      <p
        className="text-gray-600 mb-4 line-clamp-7"
        dangerouslySetInnerHTML={{ __html: get(blog, "text") }}
      ></p>

      <Link
        href={`/blogs/${blog.id}`}
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 inline-block"
      >
        {t("buttons.readMore")}
      </Link>
    </div>
  );
}
