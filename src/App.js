import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/index";
import SignInPage from "./components/pages/signin";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SignInPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
