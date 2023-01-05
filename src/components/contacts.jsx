import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <h2 className="contacts__header header">Контакты для связи:</h2>
            <div className="contacts__item">
                <b>Тел.: </b>
                <a href="tel:89841470246">8 (984) 147-02-46</a>
            </div>
            <div className="contacts__item">
                <b>Телеграмм: </b>
                <a href="https://t.me/elon_26" target="blank">https://t.me/elon_26</a>
            </div>
            <div className="contacts__item">
                <b>Email: </b>
                <a href="mailto:evgeniy.sologub.vl@gmail.com">evgeniy.sologub.vl@gmail.com</a>
            </div>
        </div>);
};

export default Contacts;