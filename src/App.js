import React from "react";
import PortfolioPage from "./components/portfolioPage";
import LangsProvider from "./hooks/useLangs";
import ClickCatcherProvider from "./hooks/useClickCatcher";

function App() {
    return (
        <div className="App">
            <LangsProvider>
                <ClickCatcherProvider>
                    <PortfolioPage />
                </ClickCatcherProvider>
            </LangsProvider>
        </div>
    );
}

export default App;
