import Image from "next/image";
import Link from "next/link";
import React from "react";

const getExcerpt = (htmlContent, wordLimit = 14) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;

  // Get text content and split it into words
  const textContent = tempElement.textContent || tempElement.innerText || "";
  const words = textContent.split(" ").filter(Boolean); // Filter to remove any empty strings

  // Get the first 14 words
  return (
    words.slice(0, wordLimit).join(" ") +
    (words.length > wordLimit ? "..." : "")
  );
};

function PostCard({ post }) {
  const { title, thumbnail, content, category, slug } = post;
  return (
    <div className="flex gap-4 ">
      <Link href={`/${slug}`}>
        {/* <Image
        src={`http://localhost:8000/storage/${thumbnail}`}
        width={200}
        height={160}
        className="rounded-lg bg-gray-400 "
        objectFit="cover"
        alt="dynamic"
      /> */}
        <img
          src={`http://localhost:8000/storage/${thumbnail}`}
          className="object-cover w-40 h-40 hidden bg-slate-950 md:block rounded-lg"
          alt=""
        />
      </Link>
      <div className="flex flex-col items-start">
        <Link href={`/${slug}`}>
          <h2 className="text-3xl font-semibold leading-10 capitalize">
            {title}
          </h2>
        </Link>
        <Link href={`/${slug}`}>
          {" "}
          <p className="text-sm text-gray-700 w-10/12">{getExcerpt(content)}</p>
        </Link>

        <span className=" text-slate-50 bg-slate-950 px-4 py-1 mt-5 rounded-full">{category.name}</span>
      </div>
    </div>
  );
}

export default PostCard;
