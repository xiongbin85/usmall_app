import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
//懒加载
import lazyLoad from "./util/lazyLoad"


const Login = lazyLoad(() => import("./pages/Login/Login"))
const Register = lazyLoad(() => import("./pages/Register/Register"))
const Index = lazyLoad(() => import("./pages/Index/Index"))
const ProDetail = lazyLoad(() => import("./pages/ProDetail/ProDetail"))

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/index" component={Index}></Route>
      <Route path="/proDetail" component={ProDetail}></Route>
      <Redirect to="/login"></Redirect>
    </Switch>
  );
}

export default App;
