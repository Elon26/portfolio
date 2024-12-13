import React from "react";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";

const CV = () => {
    const { lang } = useLangs();

    return (
        <div className="cv">
            <h2 className="cv__header header">{langs[lang].cv.title}:</h2>
            <div className="cv__item">
                <p>
                    <a href="https://www.linkedin.com/in/evgenii-sologub/" target="blank">{langs[lang].cv.linkedIn}</a>
                </p>
                <p>
                    {lang === 'en' && <a href="https://hh.ru/resume/a2cc2532ff0b90145c0039ed1f4d6e6d376e62/" target="blank">{langs[lang].cv.headhunter}</a>}
                    {lang === 'ru' && <a href="https://hh.ru/resume/dafca8a1ff0e0fc8640039ed1f565466446259/" target="blank">{langs[lang].cv.headhunter}</a>}
                </p>
                <p>
                    {lang === 'en' && <a href="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FEvgenii_Sologub_CV.pdf?alt=media&token=536cae78-6ba4-4506-a885-c7e43a8d371b" target="blank">{langs[lang].cv.download}</a>}
                    {lang === 'ru' && <a href="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2F%D0%A1%D0%BE%D0%BB%D0%BE%D0%B3%D1%83%D0%B1_%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B8%CC%86_%D1%80%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5.pdf?alt=media&token=c0344816-f3f5-447a-a7d1-f2f180532e10" target="blank">{langs[lang].cv.download}</a>}
                </p>
            </div>
        </div>);
};

export default CV;
