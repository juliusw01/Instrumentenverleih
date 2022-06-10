
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import './App.css'
import Header from './components/Header'
import Instrument from './components/Instrument'

function App() {

  return (
    <Container
      sx={{
        padding: "10px"
      }}
      >

      <Grid container xs={12}>
        <Grid item xs={3}>
          <Instrument
            image = "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/139262.webp"
            name = "Saxofon"
          />
        </Grid>
        <Grid item xs={3}>
          <Instrument
            image = "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/297433.webp"
            name = "Klavier"
          />
        </Grid>
        <Grid item xs={3}>
          <Instrument
            image = "https://thumbs.static-thomann.de/thumb//thumb250x250/pics/prod/130179.webp"
            name = "Gitarre"
          />
        </Grid>
        <Grid item xs={3}>
          <Instrument
            image = "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/511808.webp"
            name = "Schlagzeug"
          />
        </Grid>
      </Grid>

    </Container>
  )
}


export default App
