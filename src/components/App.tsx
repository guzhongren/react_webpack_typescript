import * as React from "react";
// antd Test
// import { Button } from 'antd';

// import {EsriMapExt} from "./map";
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