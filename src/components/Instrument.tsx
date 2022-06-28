import { Button, Card, CardMedia, Container, Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './instrumente.css'
import ResponsiveDatePickers from "./ResponsiveDatePicker";
import { Link } from "react-router-dom";
import { pink } from '@mui/material/colors';

function Instrument(props:any){
    

const {
    image,
    name,
    beschreibung,
    preis,
    verfügbarkeit,
    id
} = props

const instrumentPath = '/instrument/' + {name};

    return(
        
        <Container>
            <Card
                sx={{
                    bgcolor: "#333"
                }}
            >
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: "100%",
                                alignSelf: "flex-start"
                            }}
                            image={image}
                        />
                    </Grid>
                    <Grid xs={6} sm={6} md={6} lg={6}>
                        <Grid className="name">
                            {name}
                        </Grid>
                        <Grid className="beschreibung">
                            {beschreibung}
                        </Grid>
                        <Grid className="price">
                            {preis}
                        </Grid>
                        <Grid className="addToCart">
                            <Link to={name}>
                                <Button>
                                    <ArrowForwardIcon sx={{color : pink}}/>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Card>
        </Container>
    )

}
export default Instrument