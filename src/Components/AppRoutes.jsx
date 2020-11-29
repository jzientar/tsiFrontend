import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import ListSpares from "./Spare/ListSpares";
import ListCategories from "./Spare/ListCategories";
import DetailSpare from "./Spare/DetailSpare";
import Start from "../Components/Start";
import Banner from "../Components/Layout/Banner";
import Footer from "./Layout/Footer";
import AboutUsContent from "./AboutUs/AboutUsContent";
import ContactUs from "./ContactUs/ContactUs";
import ListOffers from "./Offer/ListOffers"

function AppRoutes() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Start} />
				<Route
					path="/Nosotros"
					component={() => (
						<>
							<Banner path="Nosotros" />
							<AboutUsContent />
						</>
					)}
				/>
				<Route
					path="/Ofertas"
					component={() => (
						<>
							<Banner path="Ofertas" />
							<ListOffers />
						</>
					)}
				/>
				<Route
					path="/Categoria"
					exact
					component={() => (
						<>
							<Banner path="Categorias" />
							<ListCategories />
						</>
					)}
				/>
				<Route path="/Categoria/:id" exact component={ListSpares} />
				<Route path="/Repuestos/detail/:id" exact component={DetailSpare} />
				<Route
					path="/Contactanos"
					component={() => (
						<>
							<Banner path="Contactanos" />
							<ContactUs />
						</>
					)}
				/>
			</Switch>
			<Footer />
		</Router>
	);
}

export default AppRoutes;
