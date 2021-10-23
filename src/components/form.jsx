import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../bgg3.jpg";
class Forms extends Component {
  canBeSubmitted() {
    const { CitizenName, Publickey, PrivateKey, Email } = this.state;
    return (
      CitizenName.length > 0 &&
      Publickey.length > 0 &&
      PrivateKey.length > 0 &&
      Email.length > 0
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
    //console.log(this);//for testing
  };

  state = {
    CitizenName: "",
    Publickey: "",
    PrivateKey: "",
    Email: ""
  };
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          //  height: "100vh%",
          //* backgroundImage: `url(${b1})`*/,
          background: `url(${b1}) no-repeat `,
          // backgroundSize: "cover",
          // marginTop: 110
        backgroundPosition: 'center',
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '99vw',
         height: '94vh'
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "60px",
            color: "#FEF9EF"
          }}
          className="mb-5 pt-3"
        >
         Vaccination System Using Blockchain
        </h1>
        <div
          style={{ marginBottom: "117px", background: "rgba(192,192,192,0.3)" }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
              color: "#FEF9EF"
            }}
            className="mb-2"
          >
            Enter the Certificate details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="Citizen ID"
                value={this.state.ID}
                onChange={this.handleChange}
                placeholder="Enter ID"
              />
            </Form.Group>
            <Button
              disabled={isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;
