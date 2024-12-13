import React, { useEffect, useState } from "react";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";
import { useClickCatcher } from "../hooks/useClickCatcher";

const LangButton = () => {
    const { lang, changeLang } = useLangs();
    const [isDialogOpen, setIsDialogOpen]  = useState(false);
    const [savedEngLang, setSavedEngLang]  = useState(langs[lang].lang.enFull);
    const [savedRusLang, setSavedRusLang]  = useState(langs[lang].lang.ruFull);
    const {initSwitcher, isClassInFocus} = useClickCatcher('.langButton__dialog', '.langButton__current')

    function setLang(lang) {
        setIsDialogOpen(false);
        changeLang(lang);
        setTimeout(() => {
            setSavedEngLang(langs[lang].lang.enFull)
            setSavedRusLang(langs[lang].lang.ruFull)
        }, 500);
    }

    useEffect(() => {
        if (!isClassInFocus) {
            setIsDialogOpen(false)
        }
    }, [initSwitcher, isClassInFocus])

    return (
        <div className="langButton">
            <button className="langButton__current" onClick={() => setIsDialogOpen(!isDialogOpen)}>
                {langs[lang].lang.currentShort}
            </button>
            <div className={`langButton__dialog ${isDialogOpen && 'visible'}`}>
                <button className="langButton__dialogItem" onClick={() => setLang('en')}>
                    {savedEngLang}
                </button>
                <button className="langButton__dialogItem" onClick={() => setLang('ru')}>
                    {savedRusLang}
                </button>
            </div>
        </div>);
        
};

export default LangButton;
