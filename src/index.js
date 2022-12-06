import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);


/* 
**** router 사용 방법  ****
BrowserRouter 적용할 거임 (한번만 실행됨)
가장 상위의 단계인 index.js 에 넣음 
 */ 