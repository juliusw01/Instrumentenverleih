import { Button, Card, Container, Grid, Stack } from "@mui/material"
import '../../Pages/Impressum/Impressum.css';


export default function Impressum(){
    return(
        <Container
        sx={{
          padding: "200px"
        }}
        className="field">
  
        <Grid container spacing={2}>
        
  
        <Grid item xs={12}>
          <h2>Ingos Instrumentenverleih</h2>
        </Grid>
  
        <Grid item xs={12}>
          <h3>Impressum</h3>
          <p>Inhaber: <br/>
               Ingo Flamingo<br/>
              <br/>
              Verantwortlich für diese Seite: <br/>
              Jean-Marc Lüders und Julius Wagner
          </p>
        </Grid>
  
        <Grid item xs={12}>
          <h3>Kontakt:</h3>
          <p>Adresse: Instrumentenallee 7 <br/>
              Telefon: 0171 94 47 135
              Mail: instrumentenverleih@gmx.de
          </p>
        </Grid>
  
        </Grid>
        
        
      </Container>
    )
}