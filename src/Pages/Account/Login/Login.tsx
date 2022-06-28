import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './Login.css'
import { Box } from "@mui/material";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event : any) {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
        <Box className="box"
          sx={{
            width: 300,
            height: 130,
          }}
          >
          <Form.Group controlId="email">
            <Form.Label className="text">Email</Form.Label>
            <Form.Control className="field"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="text">Passwort</Form.Label>
            <Form.Control className="field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          </Box>
          <Button size="lg" type="submit" disabled={!validateForm()} className="button">
            Anmelden
          </Button>
          <Link to="/register" className="registerLink">
            Registrieren
          </Link>
        </Form>
      </div>
    );
}