import React from "react";
import { CNav, CNavItem, CNavLink } from "@coreui/react";

export default function Tabs({ published, thrased, drafts, setIsTab, isTab }) {
  return (
    <div>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            href="#"
            active={isTab === "Published"}
            onClick={() => setIsTab("Published")}
          >
            Published ({published.length})
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="#"
            active={isTab === "Drafts"}
            onClick={() => setIsTab("Drafts")}
          >
            Drafts ({drafts.length})
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="#"
            active={isTab === "Thrased"}
            onClick={() => setIsTab("Thrased")}
          >
            Thrashed ({thrased.length})
          </CNavLink>
        </CNavItem>
      </CNav>
    </div>
  );
}
