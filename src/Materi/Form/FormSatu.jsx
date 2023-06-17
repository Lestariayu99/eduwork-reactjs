import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import validator from 'validator';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!validator.isEmail(email) || password.length < 8) {
      setError(true);
    } else {
      setError(false);
      
      alert("Login Berhasil !!!");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={8}>
          <div style={{ border: "1px solid blue", padding: "20px" }}>
            <h2>Login</h2>
            {error && (
              <p style={{ color: "red" }}>Maaf email/password yang anda masukan salah !!!</p>
            )}
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="button" onClick={handleLogin}>Login</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
