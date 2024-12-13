import React, { useContext, useState } from "react";

const ClickCatcherContext = React.createContext({});

let classForCheck = '';
let classForOmit = '';

export const useClickCatcher = (classForCheckName, classForOmitName) => {
    classForCheck = classForCheckName;
    classForOmit = classForOmitName;
    return useContext(ClickCatcherContext);
};

const ClickCatcherProvider = ({ children }) => {
    const [initSwitcher, setInitSwitcher] = useState(false);
    const [isClassInFocus, setIsClassInFocus] = useState(false);

    const clickCatcher = (e) => {
        if (e.target instanceof Element && classForCheck && classForOmit) {
            setInitSwitcher(() => !initSwitcher)
                if (e.target.closest(classForCheck) || e.target.closest(classForOmit)) {
                    setIsClassInFocus(true);
                } else {
                    setIsClassInFocus(false);
                }
            
        }
    };

    return (
        <ClickCatcherContext.Provider
            value={{
                initSwitcher,
                isClassInFocus
            }}
        >
            <div className="clickCatcher" onClick={clickCatcher}>
                {children}
            </div>
        </ClickCatcherContext.Provider>
    );
};

export default ClickCatcherProvider;
