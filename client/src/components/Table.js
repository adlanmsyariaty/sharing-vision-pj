import React from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButtonGroup,
  CButton,
} from "@coreui/react";
import axios from "axios";

export default function Table({ data, isTab, setIsTab }) {
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/article/${id}`);
      setIsTab("Thrased");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">No.</CTableHeaderCell>
            <CTableHeaderCell scope="col">Title</CTableHeaderCell>
            <CTableHeaderCell scope="col">Category</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((el, index) => (
            <CTableRow key={el.id}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              <CTableDataCell>{el.title}</CTableDataCell>
              <CTableDataCell>{el.category}</CTableDataCell>
              <CTableDataCell>
                <CButtonGroup
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <CButton color="success">
                    <ion-icon name="create-outline"></ion-icon>
                  </CButton>
                  {isTab !== "Thrased" && (
                    <CButton color="danger" onClick={() => deletePost(el.id)}>
                      <ion-icon name="trash-outline"></ion-icon>
                    </CButton>
                  )}
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}
