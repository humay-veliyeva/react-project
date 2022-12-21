import React, { useEffect } from "react";
import "./css/Products.css";
import btn1 from "../imgs/btn1.png";
import btn2 from "../imgs/btn2.png";
import searchIcon from "../imgs/search.png";
import mehsul1 from "../imgs/mehsul1.png";
import mehsul2 from "../imgs/mehsul2.png"; 
import mehsul3 from "../imgs/mehsul3.png";
import mehsul4 from "../imgs/mehsul4.png";
import mehsul5 from "../imgs/mehsul5.png";
import mehsul6 from "../imgs/mehsul6.png";
import mehsul7 from "../imgs/mehsul7.png";
import mehsul8 from "../imgs/mehsul8.png";
import mehsul9 from "../imgs/mehsul9.png";
import mehsul10 from "../imgs/mehsul10.png";
import mehsul11 from "../imgs/mehsul11.png";
import mehsul12 from "../imgs/mehsul12.png";
import mehsul13 from "../imgs/mehsul13.png";
import mehsul14 from "../imgs/mehsul14.png";
import mehsul15 from "../imgs/mehsul15.png";
import mehsul16 from "../imgs/mehsul16.png";
import { Link } from "react-router-dom";

const Products = () => {

  const showLess = () => {
    let clickDetails = document.querySelectorAll(".click-details");
    let productName = document.querySelectorAll('.product-name-p')
    const pR1 = document.querySelectorAll('.pr1')
    clickDetails.forEach((item) => (item.style.display = "block"));
    productName.forEach((item) => (item.style.display = "none"));
    pR1.forEach((item) => (item.classList.add('show-less')));

  };

  const showMore = () => {
    let clickDetails = document.querySelectorAll(".click-details");
    let productName = document.querySelectorAll('.product-name-p')
    const pR1 = document.querySelectorAll('.pr1')
    clickDetails.forEach((item) => (item.style.display = "none"));
    productName.forEach((item) => (item.style.display = "block"));
    pR1.forEach((item) => (item.classList.remove('show-less')));
  };


  return (
    <>
      <div className="filter-container">
        <div className="left-side">
          <p className="lefts-side-p">Все</p>
          <select className="filter-select" name="" id="">
            <option value="Диваны ">Диваны </option>
            <option value="Кресла  ">Кресла </option>
            <option value="Стулья  ">Стулья </option>
            <option value="Кровати  ">Кровати </option>
            <option value="Матрацы  ">Матрацы </option>
            <option value="Пуфы  ">Пуфы </option>
            <option value="2D-3D модели  ">2D-3D модели </option>
          </select>
          <div className="buttons">
            <div
              onClick={showMore}
              className="change-styleone"
            ></div>
            <div onClick={showLess} className="change-styletwo"></div>
          </div>
        </div>
        <div className="right-side">
          <div className="searc-area">
            <input
              className="search-input"
              placeholder="Поиск"
              type="text"
              name=""
              id=""
            />
            <img className="searc-icon" src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="products-container">
        <div id="pr-1" className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul1} alt="" />
            <div className="click-details">
              <p className="click-details-name">Martin</p>
              <p className="click-details-p">
                Мягкое кресло «Альба» компании «Экми -мебель»- это украшение и
                удобное дополнение Вашего интерьера. Кресло «Альба» оптимальная
                личная зона для отдыха.
              </p>
            </div>
          </div>
          <p className="product-name-p">Martin</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul2} alt="" />
            <div className="click-details">
              <p className="click-details-name">Alba</p>
              <p className="click-details-p">
                Мягкое кресло «Альба» компании «Экми -мебель»- это украшение и удобное дополнение Вашего интерьера. Кресло «Альба» оптимальная личная зона для отдыха.
              </p>
            </div>
          </div>
          <p className="product-name-p">Alba</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul3} alt="" />
            <div className="click-details">
              <p className="click-details-name">Toscana</p>
              <p className="click-details-p">
                Кресло «Тоскана» компании «EKMI-мебель». Располагает для удобного времяпровождения.
              </p>
            </div>
          </div>
          <p className="product-name-p">Toscana</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul4} alt="" />
            <div className="click-details">
              <p className="click-details-name">Leonardo</p>
              <p className="click-details-p">
                Мягкое кресло «Альба» компании «Экми -мебель»- это украшение и удобное дополнение Вашего интерьера. Кресло «Альба» оптимальная личная зона для отдыха.
              </p>
            </div>
          </div>
          <p className="product-name-p">Leonardo</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul5} alt="" />
            <div className="click-details">
              <p className="click-details-name">Boorbon</p>
              <p className="click-details-p">
                Кресло «Тоскана» компании «EKMI-мебель». Располагает для удобного времяпровождения.
              </p>
            </div>
          </div>
          <p className="product-name-p">Boorbon</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul6} alt="" />
            <div className="click-details">
              <p className="click-details-name">Emilio</p>
              <p className="click-details-p">
                Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.
              </p>
            </div>
          </div>
          <p className="product-name-p">Emilio</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul7} alt="" />
            <div className="click-details">
              <p className="click-details-name">Nensi</p>
              <p className="click-details-p">
                Мягкие формы кровати «Ненси» создадут уют и комфорт в Вашей спальне.
              </p>
            </div>
          </div>
          <p className="product-name-p">Nensi</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul8} alt="" />
            <div className="click-details">
              <p className="click-details-name">Tatami</p>
              <p className="click-details-p">
                Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.
              </p>
            </div>
          </div>
          <p className="product-name-p">Tatami</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul9} alt="" />
            <div className="click-details">
              <p className="click-details-name">Regina</p>
              <p className="click-details-p">
                Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.
              </p>
            </div>
          </div>
          <p className="product-name-p">Regina</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul10} alt="" />
            <div className="click-details">
              <p className="click-details-name">Malta</p>
              <p className="click-details-p">
                Двусторонний матрац МАЛЬТА без пружин – удачное сочетание жестокости и комфортности. Самый низкий матрац в нашей линейке.
              </p>
            </div>
          </div>
          <p className="product-name-p">Malta</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul11} alt="" />
            <div className="click-details">
              <p className="click-details-name">Versal</p>
              <p className="click-details-p">
                Мягкие формы кровати «Ненси» создадут уют и комфорт в Вашей спальне.
              </p>
            </div>
          </div>
          <p className="product-name-p">Versal</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul12} alt="" />
            <div className="click-details">
              <p className="click-details-name">Exclusive 1</p>
              <p className="click-details-p">
                Мягкие формы кровати «Ненси» создадут уют и комфорт в Вашей спальне.
              </p>
            </div>
          </div>
          <p className="product-name-p">Exclusive 1</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul13} alt="" />
            <div className="click-details">
              <p className="click-details-name">Floret</p>
              <p className="click-details-p">
                Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.
              </p>
            </div>
          </div>
          <p className="product-name-p">Floret</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul14} alt="" />
            <div className="click-details">
              <p className="click-details-name">Exclusive bed 2</p>
              <p className="click-details-p">
                Эксклюзивная мебель
              </p>
            </div>
          </div>
          <p className="product-name-p">Exclusive bed 2</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul15} alt="" />
            <div className="click-details">
              <p className="click-details-name">Arni</p>
              <p className="click-details-p">
                Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.
              </p>
            </div>
          </div>
          <p className="product-name-p">Arni</p>
        </div>
        <div className="pr1">
          <div className="pr-container">
            <img className="pr-img" src={mehsul16} alt="" />
            <div className="click-details">
              <p className="click-details-name">Taiti</p>
              <p className="click-details-p">
                Эксклюзивный матрац с ортопедическим эффектом без пружин. Самая жесткая, но при этом очень комфортная модель во всей линейке. Идеальный вариант для крупных людей.
              </p>
            </div>
          </div>
          <p className="product-name-p">Taiti</p>
        </div>
      </div>
      <div className="pagination">
        <ul>
          <Link>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 6.21739L7 11"
                stroke="#343434"
                stroke-opacity="0.5"
                stroke-width="0.5"
              />
            </svg>
          </Link>
          <Link>1</Link>
          <Link>2</Link>
          <Link>3</Link>
          <Link>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 6.21739L1 11"
                stroke="#343434"
                stroke-opacity="0.5"
                stroke-width="0.5"
              />
            </svg>
          </Link>
        </ul>
      </div>
      <div className="product-button">
        <button className="product-btn">смотреть все</button>
      </div>
    </>
  );
};

export default Products;
