import { Box, Grid } from "@mui/material";
import { Button } from "react-bootstrap";
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
                <p><Button href="/" className="footerLink">Home</Button> | <Link to="/impressum" className="footerLink">Impressum</Link> | <Link to="/ueberuns" className="footerLink">Über uns</Link></p>
            </Grid>
            </Box>
        </Grid>    
    )
}