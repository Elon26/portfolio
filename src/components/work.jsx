import React from "react";
import langs from "../lang/langs.json";
import { useLangs } from "../hooks/useLangs";

const Work = ({ name, img, stack, repository, deploy, video, description, install, adminPanel }) => {
    const { lang } = useLangs();

    return (
        <div className="works__item">
            <div className={"works__card " + (description.length > 500 ? "big" : "small")}>
                <div className="works__front">
                    <div className="works__screen">
                        <img src={img} alt="App screen" />
                    </div>
                    <div className="works__name">{name}</div>
                </div>
                <div className="works__back">
                    <div className="works__info">
                        <div className="works__infoItem">
                            <b>{langs[lang].worksHeaders.project}: </b>{name}
                        </div>
                        <div className="works__infoItem">
                            <b>{langs[lang].worksHeaders.stack}: </b>{stack}
                        </div>
                        <div className="works__infoItem">
                            <a href={repository}target="blank">{langs[lang].worksHeaders.repository}</a>
                        </div>
                        {deploy && <div className="works__infoItem">
                            <a href={deploy}
                                target="blank">{langs[lang].worksHeaders.deploy}</a>
                        </div>}
                        {install && <div className="works__infoItem">
                            <a href={install} target="blank">{langs[lang].worksHeaders.install}</a>
                        </div>}
                        {adminPanel && <div className="works__infoItem">
                            <a href={adminPanel} target="blank">{langs[lang].worksHeaders.adminPanel}</a>
                        </div>}
                        <div className="works__infoItem">
                            <b>{langs[lang].worksHeaders.description}: </b>{description}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Work;