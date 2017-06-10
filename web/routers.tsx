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
  <Router basename="/">
    <div style={{ height: "100%", width: "100%" }}>
      <ProjectNavBar projectName={"React 脚手架测试框架"} />
      <Route  path="/" component={Home} ></Route>  
      <Route  path="/test" component={Test} ></Route>
      <Route  path="/ags" component={AGS} ></Route>    
      <Route exact path="/user/:username" component={User}/>
    </div>
  </Router>
)
const Home = () => (
  <div style={{ width: "100%" }}>
    <h2>Home</h2>
  </div>
)
const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}
const Test = () => (
  <Home1 compiler={"ts"} framework={"react"} />
);
const AGS = () =>(
  <EsriMapExt />
);


export default Index