import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddPost({ isPage, setIsPage }) {
  const [newPost, setPost] = useState({
    title: "",
    content: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    setIsPage("add")
  }, [setIsPage])

  async function savePost(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/article",
        newPost
      );
      Swal.fire({
        title: "Success to add new post",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1000,
      });
      setPost({
        title: "",
        content: "",
        category: "",
        status: "",
      });
    } catch (error) {
      if (Array.isArray(error.response.data.message)) {
        Swal.fire({
          title: "Failed to add new post",
          text: error.response.data.message.join("\n"),
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 4000,
        });
      } else {
        Swal.fire({
          title: error.response.data.message,
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1000,
        });
      }
    }
  }

  return (
    <div className="w-75">
      <h1 className="mb-4 mt-4">ADD NEW POST</h1>
      <form onSubmit={(e) => savePost(e)}>
        <div className="mb-3">
          <p className="m-1 text-start">Title</p>
          <input
            type="text"
            className="form-control"
            value={newPost.title}
            name="title"
            onChange={(e) =>
              setPost({ ...newPost, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <p className="m-1 text-start">Content</p>
          <textarea
            type="text"
            className="form-control"
            value={newPost.content}
            name="content"
            onChange={(e) =>
              setPost({ ...newPost, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <p className="m-1 text-start">Category</p>
          <input
            type="text"
            className="form-control"
            value={newPost.category}
            name="category"
            onChange={(e) =>
              setPost({ ...newPost, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Publish"
            name="status"
            onChange={(e) =>
              setPost({ ...newPost, [e.target.name]: e.target.value })
            }
          />
          <p className="m-1 text-start">Publish</p>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Draft"
            name="status"
            onChange={(e) =>
              setPost({ ...newPost, [e.target.name]: e.target.value })
            }
          />
          <p className="m-1 text-start">Draft</p>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}
