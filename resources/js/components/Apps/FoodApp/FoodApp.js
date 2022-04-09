import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const FoodApp = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </React.Fragment>
    );
};

export default FoodApp;

if (document.getElementById("app")) {
    ReactDOM.render(<FoodApp />, document.getElementById("app"));
}
