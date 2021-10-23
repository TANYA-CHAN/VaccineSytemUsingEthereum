import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../bgg3.jpg";
import CertFound from "./certfound";

class Getcert extends Component {
  canBeSubmittedid() {
    const id = this.state.id;
    return id.length > 0;
  }
  canBeSubmittedtxh() {
    const txh = this.state.txh;
    return txh.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getcertificate = event => {
    event.preventDefault();
    this.props.getcertificate(this.state);
    //console.log(this);
  };

  gettransaction = event => {
    event.preventDefault();
    const url = "https://ropsten.etherscan.io/tx/" + this.state.txh;
    window.open(url);
    console.log(url);
  };

  state = {
    id: "",
    txh: ""
  };
  render() {
    const isEnabledid = this.canBeSubmittedid();
    const isEnabledtxh = this.canBeSubmittedtxh();
    return (
      // <div
      //   style={{
      //     //backgroundImage: `url(${b1})`,
      //     background: `url(${b1}) no-repeat `,
      //     backgroundSize: "cover",
      //     border: "1px solid black",
      //     height: "100vh",
      //     width: "100%"
      //   }}
      //   className="container-fluid "
      // >
      //  <div className=" mx-auto w-50">
      //    <h1
      //       style={{
      //         color: "white",
      //         fontFamily: "Montserrat",
      //         fontWeight: "bold"
      //       }}
      //       className=" mt-3 mb-4"
      //     >
      //       Verify Using Certificate ID
      //     </h1>
      //     <Form
      //       className="px-3 pt-4"
      //       onSubmit={this.getcertificate}
      //       style={{ background: "rgba(255,255,255,0.5)" }}
      //     >
      //       <Form.Group>
      //         <Form.Control
      //           type="text"
      //           name="id"
      //           value={this.state.id}
      //           onChange={this.handleChange}
      //           placeholder="Certificate ID"
      //         />
      //       </Form.Group>
      //       <Button
      //         disabled={!isEnabledid}
      //         className="mt-2 mb-3"
      //         variant="primary"
      //         type="submit"
      //       >
      //         Get certificate
      //       </Button>
      //     </Form>
      //     {this.props.yes ? <CertFound details={this.props.details} /> : null}

          // <hr
          //   className="mt-5 "
          //   style={{ color: "white", backgroundColor: "white", height: 5 }}
          // />
        // </div>
        <div
          style={{
            //backgroundImage: `url(${b1})`,
            background: `url(${b1}) no-repeat `,
            backgroundSize: "cover",
            border: "1px solid black",
            height: "100vh",
            width: "100%"
          }}
          className="container-fluid "
        >
        <div className=" mx-auto w-50 mb-5">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Verify Using Transaction Hash
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.gettransaction}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="txh"
                value={this.state.txh}
                onChange={this.handleChange}
                placeholder="Transaction Hash"
              />
            </Form.Group>
            <Button
              disabled={!isEnabledtxh}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verify Transaction 
            </Button>
          </Form>
        </div>
    //  </div>
    );
  }
}

export default Getcert;
