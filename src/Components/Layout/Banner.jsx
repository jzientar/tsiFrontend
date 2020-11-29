import React from "react";
import BannerImage from "../Layout/Images/CarEnginebanner.png";

function Banner(props) {
	let title;
	let description;
	const changeTitle = (path) => {
		switch (path) {
			case "Nosotros":
				title = "NOSOTROS";
				description = "Conocenos un poco mas...";
				break;
			case "Categorias":
				title = "CATEGORIAS";
				description = "";
				break;
			case "Repuestos":
				title = "REPUESTOS";
				description = "";
				break;
			case "Contactanos":
				title = "CONTACTANOS";
				description = "";
				break;
			case "Detalle":
				title = "DETALLE";
				description = "";
				break;
			case "Ofertas":
				title = "OFERTAS";
				description = "";
				break;
			default:
				break;
		}
	};
	return (
		<div
			id="carouselExampleSlidesOnly"
			className="carousel slide"
			data-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src={BannerImage}
						alt="First slide"
						style={{ minHeight: "50vh", backgroundSize:"contain" }}
					/>
				</div>
				<div className="carousel-caption d-md-block">
					{changeTitle(props.path)}
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default Banner;
