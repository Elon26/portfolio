import React from "react";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";

const Contacts = () => {
    const { lang } = useLangs();

    return (
        <div className="contacts">
            <h2 className="contacts__header header">{langs[lang].contacts.title}:</h2>
            <div className="contacts__item">
                <b>Telegram: </b>
                <a href="https://t.me/elon_26" target="blank">https://t.me/elon_26</a>
            </div>
            <div className="contacts__item">
                <b>WhatsApp: </b>
                <span>+7 984-147-02-46</span>
            </div>
            <div className="contacts__item">
                <b>{langs[lang].contacts.mobile}: </b>
                <a href="tel:+995593236434">+995 593-23-64-34</a>
            </div>
            <div className="contacts__item">
                <b>Email: </b>
                <a href="mailto:evgeniy.sologub.vl@gmail.com">evgeniy.sologub.vl@gmail.com</a>
            </div>
        </div>);
};

export default Contacts;