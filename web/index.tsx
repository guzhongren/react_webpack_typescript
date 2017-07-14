
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'console-polyfill';
/** 兼容 IE */
import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'es6-shim';
import * as React from "react";
import * as ReactDOM from "react-dom";
import APP from "./routers";

// import { Home1 } from "./components/home";

ReactDOM.render(
    <APP />,
    document.getElementById("app")
);

