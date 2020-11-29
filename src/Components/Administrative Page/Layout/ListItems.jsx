import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CategoryIcon from "@material-ui/icons/Category";
import BuildIcon from "@material-ui/icons/Build";
import RedeemIcon from "@material-ui/icons/Redeem";
import MessageIcon from "@material-ui/icons/Message";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";

export const mainListItems = (
	<div>
		<NavLink to="/administration/Quotation">
			<ListItem button>
				<ListItemIcon>
					<MonetizationOnIcon />
				</ListItemIcon>
				<ListItemText primary="Cotizar" style={{ color: "white" }} />
			</ListItem>
		</NavLink>
		<NavLink to="/administration/categories">
			<ListItem button>
				<ListItemIcon>
					<CategoryIcon />
				</ListItemIcon>
				<ListItemText primary="Categorias" style={{ color: "white" }} />
			</ListItem>
		</NavLink>
		<NavLink to="/administration">
			<ListItem button>
				<ListItemIcon>
					<BuildIcon />
				</ListItemIcon>
				<ListItemText primary="Repuestos" style={{ color: "white" }} />
			</ListItem>
		</NavLink>
		<ListItem button>
			<ListItemIcon>
				<RedeemIcon />
			</ListItemIcon>
			<ListItemText primary="Ofertas" style={{ color: "white" }} />
		</ListItem>
		<NavLink to="/administration/Inbox">
		<ListItem button>
			<ListItemIcon>
				<MessageIcon />
			</ListItemIcon>
			<ListItemText primary="Bandeja de Entrada" style={{ color: "white" }} />
		</ListItem>
		</NavLink>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<ExitToAppIcon />
			</ListItemIcon>
			<ListItemText primary="Cerar Sesion" style={{ color: "white" }} />
		</ListItem>
	</div>
);
