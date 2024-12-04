import React from "react";

const Work = ({ name, img, stack, repository, deploy, video, description, install, adminPanel }) => {
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
                            <b>Project name: </b>{name}
                        </div>
                        <div className="works__infoItem">
                            <b>Technology stack: </b>{stack}
                        </div>
                        <div className="works__infoItem">
                            <a href={repository}
                                target="blank">Go to the GitHub repository</a>
                        </div>
                        {deploy && <div className="works__infoItem">
                            <a href={deploy}
                                target="blank">View project deploy</a>
                        </div>}
                        {install && <div className="works__infoItem">
                            <a href={install}
                                target="blank">Project installation instructions</a>
                        </div>}
                        {adminPanel && <div className="works__infoItem">
                            <a href={adminPanel}
                                target="blank">Go to the admin panel</a>
                        </div>}
                        {video && <div className="works__infoItem">
                            <a href={video}
                                target="blank">Watch the project video presentation</a>
                        </div>}
                        <div className="works__infoItem">
                            <b>Project description: </b>{description}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Work;