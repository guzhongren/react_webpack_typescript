import * as React from "react";
import {EsriMapExt} from "./map";
export interface AppProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<AppProps, undefined> {
    render() {
        return(
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                <EsriMapExt />
            </div>
        )
    }
}