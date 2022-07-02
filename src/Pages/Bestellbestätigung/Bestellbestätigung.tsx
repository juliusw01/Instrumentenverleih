import { Button, Card, Container, Grid, Stack } from "@mui/material"
import './Bestellbestätigung.css';
import Confetti from 'react-confetti';


export default function Bestellbestätigung(){
    return(
        <Container
        sx={{
          padding: "200px"
        }}
        className="field">
            <Confetti/>
  
        <Grid container spacing={2}>
        
  
        <Grid item xs={12}>
          <h2>Bestellbestätigung</h2>
        </Grid>
  
        <Grid item xs={12}>
          <h3>Deine Bestellung war erfolgreich!</h3>
          <p>
              Deine Bestellung war erfolgreich! Du kannst dein Instrument ab dem angegeben Datum bei uns in der Filiale abholen.<br/>
              Vielen Dank für Deine Bestellung und viel Spaß mit deinem Instrument wünscht Dir<br/>
              Ingo und sein Team<br/>
              <br/>
              Wir freuen uns auf Dich!
          </p>
        </Grid>
  
        </Grid>
        
        
      </Container>
    )
}