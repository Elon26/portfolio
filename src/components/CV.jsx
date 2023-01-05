import React from "react";

const CV = () => {
    return (
        <div className="cv">
            <h2 className="cv__header header">Моё резюме:</h2>
            <div className="cv__item">
                <p>
                    <a href="https://vladivostok.hh.ru/resume/a2cc2532ff0b90145c0039ed1f4d6e6d376e62?hhtmFrom=resume_list" target="blank">Перейти на HeadHunter</a>
                </p>
                <p>
                    <a href="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FCV.pdf?alt=media&token=b0c59bdb-d2ea-4bdf-b3d1-14dd53c7964d" target="blank">Посмотреть сохраненную копию</a>
                </p>
            </div>
        </div>);
};

export default CV;