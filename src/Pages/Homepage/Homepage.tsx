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
            <Grid spacing={2}>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/139262.webp"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/297433.webp"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb//thumb250x250/pics/prod/130179.webp"></Instrument>
                </Grid>
                <Grid xs = {4}>
                    <Instrument image="https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/511808.webp"></Instrument>
                </Grid>
            </Grid>

        </Container>
    )
}