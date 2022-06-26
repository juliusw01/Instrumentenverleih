import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import './styles.css'

export default function Footer(){
    return(
        <Grid className="footer">
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign='center'>
                <p><Link to="/">Home</Link> | <Link to="/impressum">Impressum</Link> | <Link to="/impressum">Über uns</Link></p>
            </Grid>
        </Grid>    
    )
}