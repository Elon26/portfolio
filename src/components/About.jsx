import React from "react";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";

const About = () => {
    const { lang } = useLangs();

    return (
        <div className="about">
            <h2 className="about__header header">{langs[lang].about.title}</h2>
            <div className="about__content">
                {langs[lang].about.content.map(work => <p>{work}</p>)}
            </div>
        </div>);
};

export default About;
