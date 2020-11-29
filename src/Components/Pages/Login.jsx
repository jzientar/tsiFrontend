import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import logo from "../Layout/Images/car-spare-parts-vector.png";
import Axios from "axios";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Email: "", Password: "" };

	}
	handleSubmit = (event) => {
		event.preventDefault();
		Axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state)
			.then((response) => {
				if (response.data.isSuccess) {
					localStorage.setItem("token", response.data.message);
					this.props.history.push("/administration");
				} else {
					this.setState({ Email: "", Password: "" });
					alert("Usuario o Contraseña incorrecta");
				}
			})
			.catch((err) => console.log(err));
	};
	render() {
		return (
			
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100vh",
					background: "linear-gradient(to right, #399186, #123c4a, #399186"
				}}
			>
				<Container
					component="main"
					maxWidth="xs"
					style={{
						border: "#828782 solid 2px",
						marginTop: 105,
						backgroundColor: "#dfe8e7"
					}}
				>
					<CssBaseline />
					<div
						style={{
							marginTop: 30,
							marginBottom: 30,
							display: "flex",
							flexDirection: "column",
							alignItems: "center"
						}}
					>
						<img
							src={logo}
							width="80"
							height="80"
							className="d-inline-block align-top"
							alt="logo"
						/>

						<Typography component="h1" variant="h5">
							INGRESAR
						</Typography>
						<form
							style={{ width: "100%", marginTop: 1 }}
							onSubmit={this.handleSubmit}
						>
							<TextField
								margin="normal"
								type="email"
								placeholder="Correo Electronico*"
								fullWidth
								name="Email"
								variant="outlined"
								value={this.state.Email}
								onChange={(event) =>
									this.setState({
										...this.state,
										[event.target.name]: event.target.value
									})
								}
								required
								autoFocus
								style={{ backgroundColor: "#dae3e1" }}
							/>
							<TextField
								margin="normal"
								type="password"
								placeholder="Contraseña*"
								fullWidth
								name="Password"
								variant="outlined"
								value={this.state.Password}
								onChange={(event) =>
									this.setState({
										...this.state,
										[event.target.name]: event.target.value
									})
								}
								required
								style={{ backgroundColor: "#dae3e1" }}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Recordar contraseña"
							/>
							<Button
								variant="contained"
								type="submit"
								fullWidth
								style={{ margin: (3, 0, 2), backgroundColor: "#196ba6" }}
							>
								Iniciar sesión
							</Button>
						</form>
					</div>
				</Container>
			</div>
		);
	}
}
export default Login;
