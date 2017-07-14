/**
 * created at 2017-06-08
 * ./index.tsx
 */
/// <reference path="./@types/index.d.ts" />
import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Home1 } from "./components/home";
import { ProjectNavBar } from "./components/navBar";
import { EsriMapExt } from "./components/baseComponents/map/index";
import { LeafletMap } from "./components/baseComponents/map/leaflet";


const Index = () => (
  <Router basename="/">
    <div style={{ height: "100%", width: "100%" }}>
      <ProjectNavBar projectName={"React 脚手架测试框架"} />
      <Route exact path="/" component={Home} ></Route>
      <Route path="/test" component={Test} ></Route>
      <Route path="/ags" component={AGS} ></Route>
    </div>
  </Router>
)
const Home = () => (
  <div style={{ width: "100%", height: "calc(100% - 56px)" }}>
    <LeafletMap />
  </div>
)
const Test = () => (
  <Home1 compiler={"ts"} framework={"react"} />
);
const AGS = () => (
  <EsriMapExt />
);


export default Index