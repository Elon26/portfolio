import React from "react";

const Work = ({ name, img, stack, repository, deploy, video, description, install, adminPanel }) => {
    return (
        <div className="works__item">
            <div className={"works__card " + (description.length > 500 ? "big" : "small")}>
                <div className="works__front">
                    <div className="works__screen">
                        <img src={img} alt="Скрин приложения" />
                    </div>
                    <div className="works__name">{name}</div>
                </div>
                <div className="works__back">
                    <div className="works__info">
                        <div className="works__infoItem">
                            <b>Название проекта: </b>{name}
                        </div>
                        <div className="works__infoItem">
                            <b>Стек технологий: </b>{stack}
                        </div>
                        <div className="works__infoItem">
                            <a href={repository}
                                target="blank">Перейти в репозиторий GitHub</a>
                        </div>
                        {deploy && <div className="works__infoItem">
                            <a href={deploy}
                                target="blank">Посмотреть deploy проекта</a>
                        </div>}
                        {install && <div className="works__infoItem">
                            <a href={install}
                                target="blank">Порядок установки проекта</a>
                        </div>}
                        {adminPanel && <div className="works__infoItem">
                            <a href={adminPanel}
                                target="blank">Перейти в панель администратора</a>
                        </div>}
                        {video && <div className="works__infoItem">
                            <a href={video}
                                target="blank">Посмотреть видеопрезентацию проекта</a>
                        </div>}
                        <div className="works__infoItem">
                            <b>Описание проекта: </b>{description}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Work;