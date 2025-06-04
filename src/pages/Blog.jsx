import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/blogs";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isExpandText, setIsExpandText] = useState(false);
  const [blogClicked, setBlogClicked] = useState(null);

  // fetch data from api store in BLOGS
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(API_URL); //goes hereto get data
        setBlogs(res.data); //recieves data and sets it to blogs
        console.log(res.data); // logs the data to console
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  function handleExpandText(blog) {
    setIsExpandText(!isExpandText); //toddle isExapandText State
    setBlogClicked(blog); //set the blog that is clicked and shows the full paragraph at right
  }
  return (
    <div className="flex  flex-row  ">
      <div className="flex  flex-wrap justify-center items-center w-1/2 h-full">
        {blogs.map((blog, index) => (
          <div
            className="flex flex-col bg-blue-800 w-[20vw] text-white h-[20vh] shadow-lg shadow-blue-500/50  border-amber-500 rounded-xl my-20 mx-40 justify-center p-10"
            key={index}
          >
            {/* <img
              className="rounded-t-lg"
              src={blog.imgAttach}
              alt="blogImage"
            /> */}

            <div className="text-left text-2xl  mb-2 font-bold tracking-tight">
              {blog.title}
            </div>
            <div className="text-left text-sm font-normal tracking-tight cursor-default">
              

              {blog.description.length > 10 && (
                <span
                  className="text-yellow-500 ml-1 cursor-pointer inline-block"
                  onClick={() => handleExpandText(blog)}
                >
                  {blogClicked?.id === blog.id ? " Show Less" : " Read More"}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex  flex-wrap justify-center items-center w-1/2 h-full">
        <div className="flex flex-col bg-blue-800 text-white h-[50vh] shadow-lg shadow-blue-500/50  border-amber-500 rounded-xl my-20 mx-40 justify-center p-10">
          {blogClicked && (
            <>
              <div className="text-left text-2xl  mb-2 font-bold tracking-tight">
                {blogClicked.title}
              </div>
              <div className="text-left text-sm font-normal tracking-tight cursor-default">
                {blogClicked.description}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
