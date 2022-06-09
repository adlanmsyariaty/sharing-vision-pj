import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Preview from "./pages/Preview";

function App() {
  const [visible, setVisible] = useState(true);
  const [isPage, setIsPage] = useState("home");

  return (
    <div className="App">
      <div className="d-flex w-100">
        <Sidebar visible={visible} setVisible={setVisible} isPage={isPage} setIsPage={setIsPage}/>
        {!visible && (
          <div onClick={() => setVisible(!visible)}>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
        )}

        <div className="p-3 d-flex justify-content-center w-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost isPage={isPage} setIsPage={setIsPage}/>} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
