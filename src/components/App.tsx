import * as React from "react";
// antd Test
// import { Button } from 'antd';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<HelloProps, undefined> {
    render() {
        return(
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                 {/*<Button type="primary">Primary</Button>*/}
            </div>
        )
    }
}