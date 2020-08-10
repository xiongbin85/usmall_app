import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
//懒加载
import lazyLoad from "./util/lazyLoad"
import MyRoute from "./pages/MyRoute/MyRoute"

const Login = lazyLoad(() => import("./pages/Login/Login"))
const Register = lazyLoad(() => import("./pages/Register/Register"))
const Index = lazyLoad(() => import("./pages/Index/Index"))
const ProDetail = lazyLoad(() => import("./pages/ProDetail/ProDetail"))

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <MyRoute path="/index" component={Index}></MyRoute>
      <MyRoute path="/proDetail" component={ProDetail}></MyRoute>
      <Redirect to="/login"></Redirect>
    </Switch>
  );
}

export default App;
