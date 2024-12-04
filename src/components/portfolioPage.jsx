import React, { useState } from "react";
import Contacts from "./contacts";
import CV from "./CV";
import Works from "./works";
import About from "./About";

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
                <h1 className="mainHeader">Evgenii Sologub</h1>
                <div className="photo" onClick={openPopap}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FmyPhoto.jpg?alt=media&token=6d206d45-ccc3-442d-9c44-4543ea8a334c" alt="Me" />
                </div>
                <div className={"popap " + (isShowPopap ? "active" : "")}>
                    <div className="popap__inner">
                        <img src="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FmyPhoto.jpg?alt=media&token=6d206d45-ccc3-442d-9c44-4543ea8a334c" alt="Me" />
                    </div>
                </div>
                <About/>
                <Contacts />
                <CV />
                <Works />
                <Contacts />
                <h2 className="mainHeader">Thank you for your time!!!</h2>
            </div>
        </div>);
};

export default PortfolioPage;