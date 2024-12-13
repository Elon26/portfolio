import React from "react";
import Work from "./work";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";

const Works = () => {
    const { lang } = useLangs();

    return (
        <div className="works">
            <h2 className="works__header header">{langs[lang].worksHeaders.title}:</h2>
            {langs[lang].works.map(work => <Work
                key={work.id}
                name={work.name}
                img={work.img}
                stack={work.stack}
                repository={work.repository}
                deploy={work.deploy}
                install={work.install}
                video={work.video}
                description={work.description}
                adminPanel={work.adminPanel}
            />)}
        </div>);
};

export default Works;