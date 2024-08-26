"use client";

import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/posts/${params.slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [params.slug]);
  console.log(post);
  return (
    <div className="p-0 md:pr-9 w-full md:w-9/12 ">
      {post ? (
        <div>
          <h1 className="text-4xl  mb-5 capitalize">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
