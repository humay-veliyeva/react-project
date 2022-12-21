import React from "react";
import "./css/Writeus.css";
import writeUs from "../imgs/write.jpg";
import oPic from "../imgs/letter.png";

const WriteUs = () => {
  return (
    <div className="write-us-container">
      <div className="write-container-2">
        <img className="write-us" src={writeUs} alt="Write Us" />
        <p className="write-us-o">O</p>
        <form className="write-form" action="">
          <p className="form-p">Заполните форму</p>
          <h1 className="form-h">остались вопросы?</h1>
          <div className="input-sections">
            <label for="one" class="remove">
              <input type="text" id="one" value="" name="" />
              <span className="input-span">Ваше имя*</span>
            </label>{" "}
            <br />
            <label for="two" class="remove">
              <input type="text" id="two" value="" name="" />
              <span className="input-span">Ваш номер телефона</span>
            </label>{" "}
            <br />
            <label for="three" class="remove">
              <input type="text" id="three" value="" name="" />
              <span className="input-span">Страна</span>
            </label>{" "}
            <br />
            <label for="four" class="remove">
              <input type="text" id="four" value="" name="" />
              <span className="input-span">Комментарий</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteUs;
