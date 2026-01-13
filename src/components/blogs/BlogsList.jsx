"use client";
import { useSelector, useDispatch } from "react-redux";
import BlogItem from "./BlogItem";
import { allBlogs } from "@/utils/blogs";
import { setCurrentPage } from "@/features/blogs/blogsSlice";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/utils/useLocalized";
import { fetchBlogsThunk } from "@/features/blogs/blogsApi";
import { useEffect } from "react";

export default function BlogsList() {
  const dispatch = useDispatch();
  const { search, currentPage, itemsPerPage, blogs, isLoading } = useSelector(
    (state) => state.blogs
  );
  const { t } = useTranslation();
  const { get } = useLocalized();

  useEffect(() => {
    dispatch(fetchBlogsThunk());
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    get(blog, "title").toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handlePrev = () => {
    dispatch(setCurrentPage(Math.max(currentPage - 1, 1)));
    scrollToTop();
  };

  const handleNext = () => {
    dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)));
    scrollToTop();
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="w-[100%] pr-6">
      {currentBlogs.length > 0 ? (
        currentBlogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      ) : isLoading ? (
        <div className="h-[400px] flex items-center justify-center">
          <img src="/images/spinner.gif" alt="" className="w-[70px] h-[70px]" />
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">No results found.</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            className="sm:px-4 sm:py-2v px-3 py-0.5 sm:text-[16px] bg-green-600 text-white rounded-full disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            {t("buttons.previous")}
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-3 text-gray-500 select-none">
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => {
                  dispatch(setCurrentPage(page));
                  scrollToTop();
                }}
                className={`sm:px-4 sm:py-2 px-3 py-0.5 rounded-full ${
                  currentPage === page
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 hover:bg-green-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            className="sm:px-4 sm:py-2v px-3 py-0.5 sm:text-[16px] bg-green-600 text-white rounded-full disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            {t("buttons.next")}
          </button>
        </div>
      )}
    </div>
  );
}
