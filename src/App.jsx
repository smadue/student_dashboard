import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <Topbar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
