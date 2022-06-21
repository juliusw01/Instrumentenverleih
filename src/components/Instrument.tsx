import { Button, Card, CardMedia, Container, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './instrumente.css'
import ResponsiveDatePickers from "./ResponsiveDatePicker";

function Instrument(props:any){

const {
    image,
    name,
    beschreibung,
    preis,
    verfügbarkeit
} = props

    return(
        <Container>
            <Card
                sx={{
                    bgcolor: "#333"
                }}
            >
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: "100%",
                                alignSelf: "flex-start"
                            }}
                            image={image}
                        />
                    </Grid>
                    <Grid xs={6}>
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
                            <Button>
                                <AddShoppingCartIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Card>
        </Container>
    )

}
export default Instrument