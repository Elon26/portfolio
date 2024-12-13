import React, { useContext, useState } from "react";

const langsContext = React.createContext({});

export const useLangs = () => {
    return useContext(langsContext);
};

const LangsProvider = ({ children }) => {
    let userLang = navigator.language.split("-")[0];
    userLang = userLang === 'ru' ? userLang : 'en';
    const [lang, setLang] = useState(userLang);

    function changeLang(newLang) {
        setLang(newLang)
    }

    return (
        <langsContext.Provider value={{ lang, changeLang }}>
            {children}
        </langsContext.Provider>
    );
};

export default LangsProvider;
