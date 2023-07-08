import React from "react";
import Work from "./work";
import works from "../dataBase";

const Works = () => {
    return (
        <div className="works">
            <h2 className="works__header header">Мои работы:</h2>
            {works.map(work => <Work
                key={work.id}
                name={work.name}
                img={work.img}
                stack={work.stack}
                repository={work.repository}
                deploy={work.deploy}
                install={work.install}
                video={work.video}
                description={work.description}
            />)}
        </div>);
};

export default Works;