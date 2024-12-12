import React from "react";

const CV = () => {
    return (
        <div className="cv">
            <h2 className="cv__header header">My CV:</h2>
            <div className="cv__item">
                <p>
                    <a href="https://www.linkedin.com/in/evgenii-sologub/" target="blank">Go to LinkedIn</a>
                </p>
                <p>
                    <a href="https://hh.ru/resume/a2cc2532ff0b90145c0039ed1f4d6e6d376e62/" target="blank">Go to Headhunter</a>
                </p>
                <p>
                    <a href="https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FEvgenii_Sologub_CV.pdf?alt=media&token=536cae78-6ba4-4506-a885-c7e43a8d371b" target="blank">Download</a>
                </p>
            </div>
        </div>);
};

export default CV;
