import React, { useState, useEffect } from "react";
import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";

export default function Preview() {
  const [published, setPublished] = useState([]);

  async function fetchPost() {
    try {
      const resPublish = await axios.get(
        "http://localhost:3000/article/0/0?status=Publish"
      );
      setPublished(resPublish.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {published.map((publish) => (
        <CCard className="mt-3">
          <CCardHeader>{publish.title}</CCardHeader>
          <CCardBody>
            <blockquote className="blockquote mb-0">
              <p>
                {publish.content}
              </p>
            </blockquote>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
}
