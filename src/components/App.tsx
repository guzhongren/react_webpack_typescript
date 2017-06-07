import * as React from "react";
import $ = require("jquery");
// antd Test
import { Button } from "antd";

// import {AppMain} from "./map";
export interface AppProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<AppProps, undefined> {

    componentDidMount() {
        // jquery 测试
        console.log($("#test"));
    }
    handleOnclick() {
        alert("点击了");
    }
    render() {
        return (
            <div>
                <h1 id="test">Hello from {this.props.compiler} and {this.props.framework}</h1>

                <Button onClick={this.handleOnclick.bind(this)}>antd Test</Button>
                {/*<AppMain/>*/}
            </div>
        )
    }
}