import React, { useState } from "react";
import "./Program2.css";
import { Button, Card, Navbar, Container } from "react-bootstrap";

const Program2 = () => {
  const [login, setLogin] = useState(false);

  const loginhandler = () => {
    setLogin(true);
  };

  const logouthandler = () => {
    setLogin(false);
  };

  return (
    <div className="divmain2">
      <Card className="text-center">
        <Navbar bg="primary" className="naav">
          <Container style={{ gap: "100px" }}>
            <span style={{ color: "white" }}>Navigation</span>
            {login ? (
              <Button variant="light" onClick={logouthandler}>
                Logout
              </Button>
            ) : (
              <Button variant="light" onClick={loginhandler}>
                Login
              </Button>
            )}
          </Container>
        </Navbar>
        <Card.Body>
          <div>
            {login ? (
              <div>
                <h1>Logged In</h1>
              </div>
            ) : (
              <div>
                <h1>Loggout successfully</h1>
              </div>
            )}
          </div>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "#2b7ffc", color: "white" }}>
          Footer
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Program2;
