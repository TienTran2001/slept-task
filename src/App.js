import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Todos from "./pages/Todos/Todos";

function App() {
  return (
    <div className="h-screen font-ibm px-[20px] text-gray-900 bg-todo">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
