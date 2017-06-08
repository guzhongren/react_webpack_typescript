import * as React from "react";
import $ = require("jquery");
// antd Test
// import { Button } from "antd";
import { Button, ButtonGroup } from 'reactstrap';
import { EsriMapExt } from "./map";
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
            <div style={{width:"100%",  height:"100%"}}>
                <h1 id="test">Hello from {this.props.compiler} and {this.props.framework}</h1>
                {/*antd*/}
                {/*<Button onClick={this.handleOnclick.bind(this)}>antd Test</Button>*/}

                {/*react-bootstrap*/}
                {/*<igm src={require<string>("")} />*/}
                <ButtonGroup>
                    <Button color="primary">Left</Button>{' '}
                    <Button color="secondary">Middle</Button>{' '}
                    <Button color="success">Right</Button>
                </ButtonGroup>
                <EsriMapExt />
            </div>
        )
    }
}