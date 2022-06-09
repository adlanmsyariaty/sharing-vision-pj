import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Tabs from "../components/Tabs";
import axios from "axios";

export default function Home() {
  const [published, setPublished] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [thrased, setThrased] = useState([]);
  const [isTab, setIsTab] = useState("Published");

  useEffect(() => {
    async function fetchPost() {
      try {
        const resPublish = await axios.get(
          "http://localhost:3000/article/0/0?status=Publish"
        );
        const resDraft = await axios.get(
          "http://localhost:3000/article/0/0?status=Draft"
        );
        const resThrash = await axios.get(
          "http://localhost:3000/article/0/0?status=Thrash"
        );
        setPublished(resPublish.data);
        setDrafts(resDraft.data);
        setThrased(resThrash.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchPost();
  }, [isTab]);

  return (
    <div className="w-75">
      <h1 className="mb-4 mt-4">POST LIST</h1>
      <Tabs published={published} drafts={drafts} thrased={thrased} isTab={isTab} setIsTab={setIsTab}/>
      <Table data={isTab === "Published"? published : isTab === "Drafts" ? drafts : thrased} isTab={isTab} setIsTab={setIsTab}/>
    </div>
  );
}
