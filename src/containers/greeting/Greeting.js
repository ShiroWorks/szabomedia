import React, { useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import Twemoji from 'react-twemoji';

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
               
                    <Twemoji noWrapper={true} options={{ className: 'twemoji' }}>
                      <span className="wave-emoji">👋</span>
                    </Twemoji>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
              Egy szenvedélyes full stack webfejlesztő  <Twemoji noWrapper={true} options={{ className: 'twemojirocket', size :'40x40' }}>
                      <span className="emoji">🚀 </span>
                    </Twemoji>aki tapasztalattal rendelkezik webes alkalmazások készítésében JavaScript / Reactjs / Nodejs / PHP és még sok más könyvtár / keretrendszer használatával.
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Kapcsolat" href="#contact" />
                {/* <Button
                  text="Önéletrajz"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Vili asztalon ül"
              src={require("../../assets/images/manOnTable.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
