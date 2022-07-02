
import { Grid } from "@mui/material"
import { Button } from "react-bootstrap"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './styles.css'

export default function Navbar(){
    return(
        <nav className="nav">
            <Button href="/" className="site-title">
                Ingos Instrumentenverleih
            </Button>
            <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 1, sm: 1, md: 1, lg:1}}>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 1, sm: 1, md: 1, lg:1}}>
                    <Link to="/login">
                        Anmelden
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 1, sm: 1, md: 1, lg:1}}>
                    <Link to="/cart">
                        Warenkorb
                    </Link>
                </Grid>
            </Grid>
        </nav>
    )
}