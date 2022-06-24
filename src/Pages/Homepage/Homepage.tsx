import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import { useState } from "react"
import Instrument from "../../components/Instrument"
import './Homepage.css'
import { Parallax } from "react-scroll-parallax"

export default function HomePage(){
    const [count, setCount] = useState(0)

    return(
        <Parallax speed={-30}>
        <div>
        <Container 
            sx={{
                padding: "0px"
        }}
        >
            <Grid spacing={4} className="instruments">
                <Grid xs = {4} className="instrument">
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/279389/7743510_800.jpg" name="Saxophon" beschreibung="Altsaxophon, perfekt geeignet für Schüler und Anfänger. Es handelt sich hier um das neue Modell mit verbesserter S- Bogen Aufnahme und verbesserte tief H/Cis- Verbindung (Nachfolgemodell des YAS-275)." preis="10€ am Tag oder 50€ pro Woche"></Instrument>
                </Grid>
                <Grid xs = {4} className="instrument">
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/297429/6088271_800.jpg" name="Flügel" beschreibung="Es handelt sich um einen Tollen Flügel!" preis="100€ am Tag oder 500€ pro Woche"></Instrument>
                </Grid>
                <Grid xs = {4} className="instrument">
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/139754/14225832_800.jpg" name="Jagdhorn" beschreibung="Es handelt sich um ein Tolles Jagdhorn!" preis="7€ am Tag oder 35€ pro Woche"></Instrument>
                </Grid>
                <Grid xs = {4} className="instrument">
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/483770/15593265_800.jpg" name="Schlagzeug" beschreibung="Es handelt sich um ein Tolles Schlagzeug!" preis="20€ am Tag oder 175€ pro Woche"></Instrument>
                </Grid>
                <Grid xs = {4} className="instrument">
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/137907/6746845_800.jpg" name="Geige" beschreibung="Es handelt sich um eine Tolle Geige!" preis="15€ am Tag oder 90€ pro Woche"></Instrument>
                </Grid>
            </Grid>

        </Container>
        </div>
        </Parallax>
    )
}