import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          margin: "auto",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
