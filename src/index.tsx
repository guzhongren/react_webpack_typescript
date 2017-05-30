import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./components/App";
let module: any;

ReactDOM.render(
    <AppContainer>
        <App compiler="Ts" framework="React" />
    </AppContainer>,
    document.getElementById("example")
);

/*// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <App compiler="Ts" framework="React" />
            </AppContainer>,
            document.getElementById("example")
        );
    });
}*/
