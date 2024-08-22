import { useRouter } from "next/router";
import React from "react";

function BlogPost() {
  const router = useRouter();

  return <div>{router.query.slug}</div>;
}

export default BlogPost;
