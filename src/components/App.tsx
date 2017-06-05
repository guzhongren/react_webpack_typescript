import * as React from "react";
// import {EsriMapExt} from "./map";
// import {Button} from "antd";
export interface AppProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<AppProps, undefined> {


    handleOnclick(){
        alert("点击了");
    }
    render() {
        return(
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                {/*<Button onClick={this.handleOnclick.bind(this)}>antd Test</Button>*/}
                {/*<EsriMapExt/>*/}
            </div>
        )
    }
}