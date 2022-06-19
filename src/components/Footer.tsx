import { Grid } from "@mui/material";
import './styles.css'

export default function Footer(){
    return(
        <Grid className="footer">
            <Grid item xs={12} textAlign='center'>
                <p>Home | Impressum | Über uns </p>
            </Grid>
        </Grid>    
    )
}