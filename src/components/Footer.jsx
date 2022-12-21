import React from "react";
import "./css/Footer.css";
import footerLogo from "../imgs/f-logo.png";
import fInsta from "../imgs/f-insta.png";
import fFb from "../imgs/f-fb.png";
import fArrow from "../imgs/f-ar.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="parts">
          <div className="partone">
            <img src={footerLogo} alt="" />
          </div>
          <div className="parttwo">
            <ul>
              <li>
                <Link>Каталог</Link>
              </li>
              <li>
                <Link>о компании</Link>
              </li>
              <li>
                <Link>
                  Индивидуальная <br /> мебель
                </Link>
              </li>
              <li>
                <Link>
                  Партнерам <br /> дизайнерам
                </Link>
              </li>
            </ul>
          </div>
          <div className="partthird">
            <ul>
              <li>
                <Link>2D, 3D модели</Link>
              </li>
              <li>
                <Link>Шоу-румы</Link>
              </li>
              <li>
                <Link>Дилерам</Link>
              </li>
              <li>
                <Link>Контакты</Link>
              </li>
              <li>
                <Link>Конфигуратор</Link>
              </li>
            </ul>
          </div>
          <div className="partfour">
            <div className="social-icons">
              <img src={fInsta} alt="" />
              <img src={fFb} alt="" />
            </div>
            <p>+38 (099)-638-45-37</p>
            <button type="button" className="footer-button">
              Персональная консультация
              <img className="f-arr" src={fArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <h1 className="footer-h1">ekmi</h1>
    </div>
  );
};

export default Footer;
