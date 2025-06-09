import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const API_URL = "http://localhost:3000/blogs";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(API_URL);
        setBlogs(res.data); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
   <div className="flex flex-col min-h-screen bg-gray-100 px-10 py-10">
  {/* Top Section: All Blogs */}
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">All Blogs</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-blue-800 text-white w-[40vw] h-[40vh] rounded-xl shadow-lg shadow-blue-500/50 p-6 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
          <p className="text-base">{blog.description.length > 40 ? blog.description.slice(0, 40) + "..." : blog.description}</p>

           <NavLink
        to={`/blog/${blog.id}`}
        className="mt-4 text-yellow-400 hover:underline text-sm"
      >
        Read More →
      </NavLink>
        </div>
      ))}
    </div>
  </section>

  {/* Bottom Section: Favorites (placeholder for now) */}
  <section className="mt-10 border-t border-blue-300 pt-10">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">Favorite Blogs</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {/* Future: Map over favorite blogs here */}
      <div className="text-blue-500 text-center italic">No favorites yet.</div>
    </div>
  </section>
</div>

  );
}

export default Home;
