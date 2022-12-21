import React from "react";
import "./css/Category.css";
import cat1 from "../imgs/cat1.png";
import cat2 from "../imgs/cat2.png";
import cat3 from "../imgs/cat3.png";
import cat4 from "../imgs/cat4.png";
import cat5 from "../imgs/cat5.png";
import cat6 from "../imgs/cat6.png";
import cat7 from "../imgs/cat7.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-container">
      <div className="cat-detail">
        <img className="cat-img" src={cat1} alt="" />
        <Link to={"/"}>Диваны</Link>
      </div>
      <div className="cat-detail">
        <img className="cat-img" src={cat2} alt="" />
        <Link to={"/"}>Стулья </Link>
      </div>
      <div className="cat-detail">
        <img className="cat-img" src={cat3} alt="" />
        <Link to={"/"}>Кресла </Link>
      </div>
      <div className="cat-detail">
        <img className="cat-img" src={cat4} alt="" />
        <Link to={"/"}>Кровати</Link>
      </div>
      <div className="cat-detail">
        <img className="cat-img" src={cat5} alt="" />
        <Link to={"/"}>Матрацы</Link>
      </div>
      <div className="cat-detail">
        <img className="cat-img" src={cat6} alt="" />
        <Link to={"/"}>пуфы</Link>
      </div>
      <div className="cat-detail">
        <img className="cat-img" src={cat7} alt="" />
        <Link to={"/"}>Эксклюзивная мебель </Link>
      </div>
    </div>
  );
};

export default Category;
