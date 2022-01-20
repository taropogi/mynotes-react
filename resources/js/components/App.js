import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Componentxxxx</div>
                        <div className="card-body bg-danger">
                            I'm an example component!
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
