import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CSidebarToggler,
} from "@coreui/react";

export default function Sidebar({ visible }) {
  return (
    <CSidebar className="min-vh-100" visible={visible}>
      <CSidebarBrand>Post Project</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Posts</CNavTitle>
        <CNavItem href="#">All Posts</CNavItem>
        <CNavItem href="#">Add New</CNavItem>
        <CNavItem href="#">Preview</CNavItem>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
}
