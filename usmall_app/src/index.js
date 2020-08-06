import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入静态资源文件（重置样式和rem）
import "./assets/css/reset.css"
import "./assets/js/remScale"
//路由模式 hash
import { HashRouter } from "react-router-dom"
//antd-mobile模板
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
