import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Admission from "./pages/admission/Admission";
import Payment from "./pages/payments/Payments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/status" element={<Admission />}></Route>
            <Route path="/payments" element={<Payment />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
