"use client";

import { useEffect, useState, useRef } from "react";
import PostCard from "./components/PostCard";
import { FaChevronRight } from "react-icons/fa6";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // Start from page 1
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isInitialMount = useRef(true); // Track initial mount

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; // Set to false after initial render
    } else {
      fetchData(); // Fetch data on subsequent renders when page changes
    }
  }, [page]);

  async function fetchData() {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/posts?page=${page}`
      );
      if (response.ok) {
        const data = await response.json();
        const newPosts = data.posts.data;

        // Avoid pushing empty data to the posts array
        if (newPosts.length > 0) {
          setPosts((prev) => [...prev, ...newPosts]);

          // Check if this was the last page
          if (data.posts.current_page === data.posts.last_page) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      } else {
        console.error("Failed to fetch posts:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1); // Trigger next page
    }
  };

  return (
    <div className="pr-8 flex flex-col gap-5">
      {posts.map((e) => (
        <PostCard key={e.id} post={e} />
      ))}
      {hasMore && !loading && (
        <span
          onClick={loadMore}
          className="flex py-1.5 w-3/12 rounded-lg items-center gap-3 border-slate-950 mt-5 cursor-pointer"
        >
          <span>Load More</span>
          <FaChevronRight />
        </span>
      )}
      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to load.</p>}
    </div>
  );
}

export default Home;
