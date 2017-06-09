/**
 * created at 2017-06-08
 * ./index.tsx
 */
import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Home1 } from "./components/home";
import { ProjectNavBar } from "./components/navBar";
import { EsriMapExt } from "./components/map";
const Index = () => (
  <Router>
    <div style={{ height: "100%", width: "100%" }}>
      <ProjectNavBar projectName={"React 脚手架测试框架"} />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/ags" component={AGS} />
    </div>
  </Router>
)
const Home = () => (
  <div style={{ width: "100%" }}>
    <h2>Home</h2>
  </div>
)

const Test = () => (
  <Home1 compiler={"ts"} framework={"react"} />
);
const AGS = () =>(
  <EsriMapExt />
);


export default Index