import React, { useEffect, useState } from "react";
import axios from "axios";
import { Delete, Heart, Trash } from "lucide-react";

const API_URL = "http://localhost:3000/blogs";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isExpandText, setIsExpandText] = useState(false);
  const [blogClicked, setBlogClicked] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [like, setLike] = useState(false);

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

  //Handle read more text
  function handleExpandText(blog) {
    setIsExpandText(!isExpandText); //toddle isExapandText State
    setBlogClicked(blog); //set the blog that is clicked and shows the full paragraph at right
  }

  //Handle delete blog
  const handleDeleteBlog = async(blogId)=>{
    try {
       const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if(confirmDelete){
          await axios.delete(API_URL + `/${blogId}`) //delete each blog(represents with an id) from the api
          setBlogs(blogs.filter(blog => blog.id !== blogId)); //Removes  the deleted blog from the  blog list
          setIsDelete(true); 
    }
    } catch (err) {
      console.log(err)
      
    }

  }


  //Handle Like a Blog, its going to update in db when a blog is liked
  // const handleLikeBlog = async (blogId ) =>{
  //   try {
  //         await axios.patch(API_URL + `/${blogId}`,{like: !like} )

      
  //   } catch (err) {
  //     console.log(err);
      
  //   }
      
    
  // }
  return (
    <div className="flex  flex-row  ">
      <div className="flex  flex-wrap justify-center items-center w-1/2  bg-blue-200 h-full">
        {blogs.map((blog, index) => (
          <div
            className="flex flex-col bg-blue-800 w-[40vw] text-white h-[20vh] shadow-lg shadow-blue-500/50  border-amber-500 rounded-xl  mx-40  my-10 justify-center p-10"
            key={index}
          >
            <div className="flex justify-end items-center hover:  mb-2 ">
              <Heart className="cursor-pointer gap-2" onClick={()=>handleLikeBlog(blog.id)}  color={like ? "red" : "white"} fill={like ? "red" : "none"}/>
                 {/* colour === red if like is true else white same as fill */}
              <Trash className="cursor-pointer" onClick={() =>handleDeleteBlog(blog.id)}/>
            </div>
            {/* <img
              className="rounded-t-lg"
              src={blog.imgAttach}
              alt="blogImage"
            /> */}

            <div className="text-left text-2xl  mb-2 font-bold tracking-tight">
              {blog.title}
            </div>
            <div className="text-left text-sm font-normal tracking-tight cursor-default">

              {/* show read more or read less depending on the text length */}
              {blog.description.length > 30 && (
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

      {/* <h1 className="text-4xl justify-center text-blue-800 font-bold"> Read Full Story</h1> */}

      <div className="flex   justify-center items-center w-1/2 h-[100vh]">
        <div className="flex flex-col  text-blue-800 h-[60vh] w-[70vw] shadow-lg shadow-blue-500/50  border-amber-500 rounded-xl my-20 mx-10 justify-center p-10">
          {blogClicked && (
            //Show this when a blog is clicked
            <div>
              <div className="text-left text-2xl  mb-4 font-bold tracking-tight">
                {blogClicked.title}
              </div>
              <div className="text-left text-lg font-medium tracking-tight cursor-default">
                {blogClicked.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
