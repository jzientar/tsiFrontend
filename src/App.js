import React from "react";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Protected from "./Components/Routes/Protected";
import Public from "./Components/Routes/Public";
import SideBar from "./Components/Administrative Page/Layout/SideBar";


function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={AppRoutes} />
				<Route path="/Nosotros" exact component={AppRoutes} />
				<Route path="/Ofertas" exact component={AppRoutes} />
				<Route path="/Categoria" exact component={AppRoutes} />
				<Route path="/Categoria/:id" exact component={AppRoutes} />
				<Route path="/Repuestos/detail/:id" exact component={AppRoutes} />
				<Route path="/Contactanos" exact component={AppRoutes} />
				<Public path="/login" exact component={Login} />
        <Protected path="/administration" exact component={SideBar}/>
				<Protected path="/administration/categories" exact component={SideBar}/>
				<Protected path="/administration/Quotation" exact component={SideBar}/>
				<Protected path="/administration/Inbox" exact component={SideBar}/>
			</Switch>
		</Router>
	);
}

export default App;
