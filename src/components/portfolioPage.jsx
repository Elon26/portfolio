import React, { useState } from "react";
import Contacts from "./contacts";
import CV from "./CV";
import Works from "./works";

const PortfolioPage = () => {
    const [isShowPopap, setIsShowPopap] = useState(false);

    const openPopap = () => {
        setIsShowPopap(true);
    };

    const closePopap = () => {
        setIsShowPopap(false);
    };

    const checkOuterClick = (e) => {
        if (isShowPopap && !e.target.closest(".popap__inner")) {
            closePopap();
        }
    };

    return (
        <div className="outer" onClick={checkOuterClick}>
            <div className="container">
                <h1 className="mainHeader">Сологуб Евгений</h1>
                <div className="photo" onClick={openPopap}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FmyPhoto.jpeg?alt=media&token=7353a015-2c76-4a2b-b086-ec7c4f1a5af5" alt="Фотография" />
                </div>
                <div className={"popap " + (isShowPopap ? "active" : "")}>
                    <div className="popap__inner">
                        <img src="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FmyPhoto.jpeg?alt=media&token=7353a015-2c76-4a2b-b086-ec7c4f1a5af5" alt="Фотография" />
                    </div>
                </div>
                <Contacts />
                <CV />
                <Works />
                <Contacts />
                <h2 className="mainHeader">Спасибо за уделённое время!!!</h2>
            </div>
        </div>);
};

export default PortfolioPage;