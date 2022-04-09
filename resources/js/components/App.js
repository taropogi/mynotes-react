import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SampleApp from "./SampleApp";

import SampleContext from "../store/sample-context";

function App() {
    const [taroName, setTaroName] = useState("Taro Boy");
    const changeTaroName = () => {
        setTaroName("This is new name " + Math.random());
    };
    return (
        <SampleContext.Provider value={{ myName: taroName, changeTaroName }}>
            <div className="container">
                <Header />
                <SampleApp />
                <Footer />
            </div>
        </SampleContext.Provider>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
