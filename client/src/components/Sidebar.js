import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CSidebarToggler,
} from "@coreui/react";
import { Link } from "react-router-dom";

export default function Sidebar({ visible, setVisible, isPage, setIsPage }) {

  return (
    <CSidebar className="min-vh-100" visible={visible}>
      <CSidebarBrand>POST PROJECT</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Posts</CNavTitle>
        <Link
          to="/"
          className={
            "text-decoration-none p-3 text-start " +
            (isPage === "home" ? "text-danger" : "text-white")
          }
          onClick={() => setIsPage('home')}
        >
          All Posts
        </Link>
        <Link
          to="/add-post"
          className={
            "text-decoration-none p-3 text-start " +
            (isPage === "add" ? "text-danger" : "text-white")
          }
          onClick={() => setIsPage('add')}
        >
          Add New
        </Link>
        <Link
          to="/preview"
          className={
            "text-decoration-none p-3 text-start " +
            (isPage === "preview" ? "text-danger" : "text-white")
          }
          onClick={() => setIsPage('preview')}
        >
          Preview
        </Link>
      </CSidebarNav>
      <CSidebarToggler onClick={() => setVisible(!visible)} />
    </CSidebar>
  );
}
