import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditPost({ idPost, setIdPost }) {

  const [newPost, setPost] = useState({
    title: "",
    content: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    if (idPost) {
      async function postData() {
        try {
          const response = await axios.get(
            `http://localhost:3000/article/${idPost}`
          );
          setPost({
            title: response.data.title,
            content: response.data.content,
            category: response.data.category,
            status: response.data.status,
          });
          console.log(response.data.status)
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
      postData();
    }
  }, [idPost]);

  async function savePost(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/article/${idPost}`, newPost);
      Swal.fire({
        title: "Success to edit new post",
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
      setIdPost()
    } catch (error) {
      if (Array.isArray(error.response.data.message)) {
        Swal.fire({
          title: "Failed to edit new post",
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
      <h1 className="mb-4 mt-4">EDIT NEW POST</h1>
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
            checked={newPost.status === "Publish"? true : false}
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
            checked={newPost.status === "Draft"? true : false}
          />
          <p className="m-1 text-start">Draft</p>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Submit
        </button>
        <button className="btn btn-danger w-100 mt-4" onClick={() => setIdPost()}>
          Cancel
        </button>
      </form>
    </div>
  );
}
