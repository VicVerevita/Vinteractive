import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/index";

function App() {
	return (
		<Router>
			<Home />
		</Router>
	);
}

export default App;
