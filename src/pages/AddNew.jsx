import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Blog from "./Blog";

const API_URL = "http://localhost:3000/blogs";

function AddNew() {

  // const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    imgAttach: "",
  });



  //Handle when a user submits the form

 async  function handleSubmit (e){
  e.preventDefault(); //prevents default form submission

  const {title, description, imgAttach} = form;

  if (title  === "" || description === "")return;

   try {
     const res = await axios.post(API_URL,form);
    setBlogs([...blog, res.data]); 
    setForm({
      title:"",
      description:"",
      imgAttach :"",
    });
    navigate("/blog")
   } catch (err) {
    console.log(err)
    
   }
   console.log(form)
  }
  return (
    <div className="flex flex-col bg-blue-800 text-white h-[70vh] shadow-lg shadow-blue-500/50 rounded-xl my-20 mx-40 justify-center p-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 font-bold text-2xl">Title</label>
          <input
          required
            type="text"
            id="title"
            placeholder="Enter Title"
            value={form.title} onChange={(e)=>setForm({...form,title : e.target.value})} name="title"
            className="rounded-lg px-4 py-2 bg-blue-100 text-blue-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content" className="mb-1 font-bold text-2xl">Content</label>
          <textarea
          required
            id="description"
            rows="6"
            placeholder="Description"
            value={form.description} onChange={(e)=>setForm({...form,description: e.target.value})} name="description"
            className="rounded-lg px-4 py-2 bg-blue-100 text-blue-800 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="imgAttach" className="mb-1 font-bold text-2xl">imgAttach</label>
          <input
            type="file"
            id="imgAttach"
            value={form.imgAttach} onChange={(e)=>setForm({...form, imgAttach: e.target.value})} name="imgAttach"
            className="rounded-lg px-4 py-2 bg-blue-100 text-blue-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex gap-4 justify-end pt-4">
          <button
            type="submit"
            className="bg-blue-100 cursor-pointer text-blue-500 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Add
          </button>
          <button
            type="button"
            className="bg-red-500 cursor-pointer text-blue-100 font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
     
    </div>
  );
}

export default AddNew;
