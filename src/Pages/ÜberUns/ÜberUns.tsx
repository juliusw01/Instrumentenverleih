import { Button, Card, Container, Grid, Stack } from "@mui/material"
import './ÜberUns.css';


export default function ÜberUns(){
    return(
        <Container
        sx={{
          padding: "200px"
        }}
        className="field">
  
        <Grid container spacing={2}>
        
  
        <Grid item xs={12}>
          <h2>Über uns</h2>
        </Grid>
  
        <Grid item xs={12}>
          <h3>Über Ingo:</h3>
          <p>
               <br/>
              <br/>
             Ingo hat mit 13 Jahren das Flöte spielen für sich entdeckt und hat seit dem die Leidenschaft an der Musik nicht mehr verloren.<br/>
             Mit 21 machte er sich selbständig und betreibt seitdem mit ganzem Herzblut Ingos Instrumentenverleih.<br/> 
             Seine Kunden schätzen vor allem den persönlichen Umgang und die hohe Expertise, die Ingo täglich unter Beweis stellt.
          </p>
        </Grid>
  
        <Grid item xs={12}>
          <h3>Über die Programmierer dieser Webseite:</h3>
          <p><br/><br/>
              Die Programmierer dieser Webseite haben sich im Zuge dieses Projekts das erste mal mit der Frontend-Entwicklung, bzw. React auseinandergesetzt.<br/>
              Nach einigen langen Nächten und vielen Kopfschmerzen ist schließlich aber trotzdem diese Webseite entstanden, für die man sich definitiv nicht verstecken muss!<br/>
              Abschließend lässt sich sagen, dass alle Probleme, die während des Projekts aufgekommen sind zu dem riesigen Lerneffekt beigetragen haben.
          </p>
        </Grid>
  
        </Grid>
        
        
      </Container>
    )
}