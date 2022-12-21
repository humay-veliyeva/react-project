import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Category from "./components/Category";
import Products from "./components/Products";
import WriteUs from "./components/WriteUs";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <Navbar />
        <Category />
        <Products />
      </div>
      <WriteUs />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
