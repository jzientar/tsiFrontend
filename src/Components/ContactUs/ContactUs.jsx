import React from "react";
import axios from "axios";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/send`,
      data: this.state
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="row justify-content-center " id="contactanos">
        <div className="container mt-5">
          <div className="col-md maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7615.585834673579!2d-66.14597798630018!3d-17.37369487321317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3741e76d3a4f3%3A0xe38e2bb5e737e71!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22%20-%20Cochabamba!5e0!3m2!1ses!2sbo!4v1603944473948!5m2!1ses!2sbo"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="myLocation"
            ></iframe>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="col-12">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white" style={{textAlign:"center"}} >
                Envianos un mensaje
              </h2>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2"
                        id="name"
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}
                        placeholder="Nombre completo"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Direccion"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control mt-2"
                        id="email"
                        value={this.state.email}
                        onChange={this.onEmailChange.bind(this)}
                        placeholder="Correo Electronico"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control mt-2"
                        placeholder="Telefono"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="form-message"
                        placeholder="Escriba su mensaje"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12" style={{textAlign:"center"}}>
                    <button className="btn btn-light" type="submit">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-white col-12">
              <h2 className="text-uppercase mt-4 font-weight-bold">
                CENTROPARTS
              </h2>
              <i className="fas fa-phone mt-3"></i>{" "}
              <a href="tel:+">(4) 4432143</a>
              <br />
              <i className="fas fa-phone mt-3"></i>{" "}
              <a href="tel:+">(+591) 77968874</a>
              <br />
              <i className="fa fa-envelope mt-3"></i>{" "}
              <a href="/">centroparts@partsbol.com</a>
              <br />
              <i className="fas fa-globe mt-3"></i> Sacaba, Cochabamba
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactUs;
