import React, { useReducer, useContext } from "react";

import SampleApp2 from "./SampleApp2";
import SampleContext from "../store/sample-context";

const emailReducer = (state, action) => {
    if (action.type === "ON-INPUT") {
        return {
            value: action.value,
            isValid: action.value.includes("@"),
        };
    }
};

function SampleApp() {
    const sampleCtx = useContext(SampleContext);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "taro here",
        isValid: false,
    });

    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: "ON-INPUT",
            value: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <h1>{sampleCtx.myName}</h1>
            <button
                className="btn btn-primary"
                onClick={sampleCtx.changeTaroName}
            >
                Change Name
            </button>
            Email:
            <input
                className="form-control"
                type="text"
                value={emailState.value}
                onInput={emailChangeHandler}
            />
            {emailState.isValid ? (
                <strong>Valid</strong>
            ) : (
                <strong>Invalid</strong>
            )}
        </React.Fragment>
    );
}

export default SampleApp;
