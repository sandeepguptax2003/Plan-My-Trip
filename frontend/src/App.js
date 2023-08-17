import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostDataForm from "./components/FormDataa";
import RetrieveData from "./components/RetrieveData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/post" element={<PostDataForm />} />
          <Route path="/retrive" element={<RetrieveData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
