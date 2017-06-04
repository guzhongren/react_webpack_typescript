import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
let module: any;

ReactDOM.render(
        <App compiler="Ts" framework="React" />,
    document.getElementById("example")
);
