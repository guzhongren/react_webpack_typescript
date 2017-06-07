import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render(
        <App compiler="Ts" framework="React" />,
    document.getElementById("app")
);

