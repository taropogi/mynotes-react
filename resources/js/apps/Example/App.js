import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [myNums, setMyNumns] = useState([1, 2, 3]);

    const [otherNums, setOtherNumbs] = useState([...myNums, 4, 5, 6]);

    return <div>{otherNums}</div>;
};

export default App;
