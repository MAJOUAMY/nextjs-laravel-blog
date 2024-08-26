"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function SideBar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:8000/api/user`);
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          console.error("Failed to fetch user:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  return (
    <aside className="w-3/12 sticky h-fit border p-4 rounded-lg top-0 right-0 hidden md:flex flex-col ">
      {user.image && (
        <img
          src={`http://localhost:8000/storage/${user.image}`}
          alt="User Image"
          className="bg-slate-400 px-2 rounded w-full h-[200px] object-cover"
        />
      )}
      {user.name && (
        <h1 className="text-2xl font-extrabold uppercase mt-2 ">{user.name}</h1>
      )}
      {user.bio && <p className="desc text-sm text-gray-600">{user.bio}</p>}

      <div className="socials flex flex-wrap gap-2 mt-3 rounded-full">
        {user.socials &&
          user.socials.map((e, i) => (
            <a
              key={i}
              href={e.url}
              // target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 h-8"
                src={`http://localhost:8000/storage/${e.logo}`}
                alt={`Social Icon ${i}`}
              />
            </a>
          ))}
      </div>
    </aside>
  );
}

export default SideBar;
