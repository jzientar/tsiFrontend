import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Layout/Images/car-spare-parts-vector.png";
function Navbar(props) {
	window.addEventListener("scroll",function(){
		var header=document.querySelector("nav");
		header.classList.toggle("sticky",window.scrollY>0);
	})
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<img
						src={logo}
						width="80"
						height="80"
						id="logo"
						className="d-inline-block align-top"
						alt="logo"
					/>
				</NavLink>
				<NavLink className="navbar-brand" to="/">
					CENTROPARTS
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" activeclassname="activo" to="/">
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="activo"
								to="/Nosotros"
							>
								Nosotros
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="activo"
								to="/Ofertas"
							>
								Ofertas
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="activo"
								to="/Categoria"
							>
								Repuestos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeclassname="activo"
								to="/Contactanos"
							>
								Contactanos
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
