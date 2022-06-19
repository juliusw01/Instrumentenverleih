import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './Register.css'

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [vorname, setVorname] = useState("");
    const [adresse, setAdresse] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0 && name.length > 0 && vorname.length > 0 && adresse.length > 0;
    }
  
    function handleSubmit(event : any) {
      event.preventDefault();
    }
  
    return (
      <div className="Register">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label className="text">Name</Form.Label>
            <Form.Control
              autoFocus
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="vorname">
            <Form.Label className="text">Vorname</Form.Label>
            <Form.Control
              autoFocus
              type="vorname"
              value={vorname}
              onChange={(e) => setVorname(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="adresse">
            <Form.Label className="text">Adresse</Form.Label>
            <Form.Control
              autoFocus
              type="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="text">Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="text">Passwort</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button size="lg" type="submit" disabled={!validateForm()} className="button">
            Registrieren
          </Button>
          <Link to="/login" className="loginLink">
            Anmelden
          </Link>
        </Form>
      </div>
    );
}