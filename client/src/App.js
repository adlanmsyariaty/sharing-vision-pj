import "./App.css";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <div className="d-flex w-100">
        <Sidebar visible={visible} />
        <div
          className="bg-primary w-100"
          style={{height: "50px"}}
          onClick={() => setVisible(!visible)}
        >
          <p>Change</p>
        </div>
      </div>
    </div>
  );
}

export default App;
