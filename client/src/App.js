import "./App.css";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CBadge,
  CNavGroup,
  CSidebarToggler,
} from "@coreui/react";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
        <CSidebar className="min-vh-100" visible={visible}>
          <CSidebarBrand>Sidebar Brand</CSidebarBrand>
          <CSidebarNav>
            <CNavTitle>Nav Title</CNavTitle>
            <CNavItem href="#">Nav item</CNavItem>
            <CNavItem href="#">
              With badge
              <CBadge color="primary ms-auto">NEW</CBadge>
            </CNavItem>
            <CNavGroup toggler="Nav dropdown">
              <CNavItem href="#">Nav dropdown item</CNavItem>
              <CNavItem href="#">Nav dropdown item</CNavItem>
            </CNavGroup>
          </CSidebarNav>
          <CSidebarToggler />
        </CSidebar>

      <div className="bg-primary fixed-top" onClick={() => setVisible(!visible)}>
        <p>Change</p>
      </div>
    </div>
  );
}

export default App;
