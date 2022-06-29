import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import './styles.css'

export default function Footer(){
    return(
        <Grid className="footer">
          <Box className="box"
          sx={{
            width: 220,
            height: 25,
          }}
          >
            <Grid item xs={12} textAlign='center'>
                <p><Link to="/" className="footerLink">Home</Link> | <Link to="/impressum" className="footerLink">Impressum</Link> | <Link to="/impressum" className="footerLink">Über uns</Link></p>
            </Grid>
            </Box>
        </Grid>    
    )
}