import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './Register.css'
import { Box } from "@mui/system";

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [vorname, setVorname] = useState("");
    const [adresse, setAdresse] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0 && name.length > 0 && vorname.length > 0 && adresse.length > 0;
    }

    const apiUrl = "localhost:8080/instrumente/add";

    useEffect(() => {
      // PUT request using fetch with error handling
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
      };
      fetch(apiUrl, requestOptions)
          .then(async response => {
              const data = await response.json();
  
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
  
              console.log(data);
              //setPostId(data.id);
          })
          .catch(error => {
              //setErrorMessage(error);
              console.error('There was an error!', error);
          });
  }, []);
  
    function handleSubmit(event : any) {
      event.preventDefault();
    }
  
    return (
      <div className="Register">
        <Form onSubmit={handleSubmit}>
        <Box className="box"
          sx={{
            width: 300,
            height: 300,
          }}
          >
          <Form.Group controlId="name">
            <Form.Label className="text">Name</Form.Label>
            <Form.Control className="field"
              autoFocus
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="vorname">
            <Form.Label className="text">Vorname</Form.Label>
            <Form.Control className="field"
              autoFocus
              type="vorname"
              value={vorname}
              onChange={(e) => setVorname(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="adresse">
            <Form.Label className="text">Adresse</Form.Label>
            <Form.Control className="field"
              autoFocus
              type="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </Form.Group>
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
          <Button size="lg" type="submit" disabled={!validateForm()} className="button" >
            Registrieren
          </Button>
          <Link to="/login" className="loginLink">
            Anmelden
          </Link>
        </Form>
      </div>
    );
}