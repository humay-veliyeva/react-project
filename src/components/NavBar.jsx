import React, { useEffect } from "react";
import logo from "../imgs/logo.jpg";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import monileMenu from "../imgs/hamburger.png";
import call from "../imgs/call.png";

const Navbar = () => {
  useEffect(() => {
    const mobileMenu = document.getElementById('mobilee-menu')
  mobileMenu.addEventListener('click' , () => {
    const sidebar = document.getElementById('sidebar-menu')
    sidebar.classList.toggle('sidebar-container-active')
  })
  } , [])
  return (
    <div className="navbar-container">
      <ul className="navbar-one">
        <Link to={"/Каталог"}>Каталог</Link>
        <Link to={"/Индивидуальная мебель"}>Индивидуальная мебель</Link>
        <Link to={"/Контакты"}>Контакты</Link>
      </ul>
      <Link to={"/"}>
        <img className="logo-main" src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-two">
        <Link to={"/О компании"}>О компании</Link>
        <Link to={"/+38 (099)-638-45-37"}>+38 (099)-638-45-37</Link>
        <select name="" id="">
          <option value="ru">RU</option>
          <option value="az">AZ</option>
        </select>
      </ul>
      <select name="" id="">
        <option value="ru">RU</option>
        <option value="az">AZ</option>
      </select>
      <img src={call} alt="" />
      <button id="mobilee-menu" className="mobile-menu">
        <img src={monileMenu} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
