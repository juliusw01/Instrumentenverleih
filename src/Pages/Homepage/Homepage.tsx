import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import { useState } from "react"
import Instrument from "../../components/Instrument"

export default function HomePage(){
    const [count, setCount] = useState(0)

    return(
        <Container 
            sx={{
                padding: "100px"
          }}
        >
            <Grid spacing={4}>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/279389/7743510_800.jpg" name="Saxophon" beschreibung="Es handelt sich um ein Tolles Saxophon!"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/297429/6088271_800.jpg" name="Jagdhorn"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/139754/14225832_800.jpg" name="Jagdhorn"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/483770/15593265_800.jpg" name="Jagdhorn"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/137907/6746845_800.jpg" name="Jagdhorn"></Instrument>
                </Grid>
            </Grid>

        </Container>
    )
}