import React, { useState } from "react";
import Contacts from "./contacts";
import CV from "./CV";
import Works from "./works";
import About from "./about";
import LangButton from "./langButton";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";

const PortfolioPage = () => {
    const { lang } = useLangs();
    const [isShowPopup, setIsShowPopup] = useState(false);

    const openPopup = () => {
        setIsShowPopup(true);
    };

    const closePopup = () => {
        setIsShowPopup(false);
    };

    const checkOuterClick = (e) => {
        if (isShowPopup && !e.target.closest(".popup__inner")) {
            closePopup();
        }
    };

    return (
        <div className="outer" onClick={checkOuterClick}>
            <div className="container">
                <h1 className="mainHeader">{langs[lang].myName}</h1>
                <div className="photo" onClick={openPopup}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FmyPhoto.jpg?alt=media&token=6d206d45-ccc3-442d-9c44-4543ea8a334c" alt="Me" />
                </div>
                <div className={"popup " + (isShowPopup ? "active" : "")}>
                    <div className="popup__inner">
                        <img src="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FmyPhoto.jpg?alt=media&token=6d206d45-ccc3-442d-9c44-4543ea8a334c" alt="Me" />
                    </div>
                </div>
                <LangButton/>
                <About/>
                <Contacts />
                <CV />
                <Works />
                <Contacts />
                <h2 className="mainHeader">{langs[lang].thanks}</h2>
            </div>
        </div>);
};

export default PortfolioPage;