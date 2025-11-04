"use client";
import { use, useEffect } from "react";
import { allBlogs } from "@/utils/blogs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogByIdThunk } from "@/features/blogs/blogsApi";

export default function BlogDetails({ params }) {
  const { id } = use(params);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogByIdThunk({ id }));
  }, [id]);

  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found</div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <h1 className="text-[50px] font-bold bg-black text-white text-center p-[50px]">
        {t("blogs.blogsPosts")}
      </h1>

      <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-6">{blog?.title_am}</h1>

        {/* <p className="text-gray-500 mb-4">
          {blog?.date} | by{" "}
          <span className="text-green-600 font-medium">{blog?.author}</span> |{" "}
          <a href="#" className="text-green-600 underline">
            {blog?.comments} comments
          </a>
        </p> */}

        {blog?.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg mb-8 w-[100%] sm:h-[400px] h-[250px]"
          />
        )}

        <div
          className="text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: blog?.text_am }}
        ></div>

        <div className="mt-10">
          <a
            href="/blogs"
            className="bg-gray-100 px-6 py-2 rounded-full hover:bg-gray-200"
          >
            ← {t("blogs.backToBlogs")}
          </a>
        </div>
      </div>
    </div>
  );
}
