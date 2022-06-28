import { Button, Card, CardMedia, Container, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Detailseite.css'
import { Link, useParams } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { useQuery } from "react-query";
import Instrument from "../../components/Instrument";
import { IInstrument } from "../../Interfaces/IInstruments";
import StaticDateRangePickerDemo from "../../components/DateRangePicker";
import { LicenseInfo } from '@mui/x-data-grid-pro';
import ResponsiveDatePickers from "../../components/ResponsiveDatePicker";
import DatePicker from "../../components/DatePicker";



export default function Detailseite(props:any){

    const {
        image,
        name,
        beschreibung,
        preis
    }=props

    let { instrumentID } = useParams();
    const apiURL = `http://127.0.0.1:8080/instrumente/${instrumentID}`;

    const {isLoading, error, data }: any = useQuery<IInstrument, Error, IInstrument, string>(
        "instrument", 
                async () => {const res = await fetch(apiURL);
                    return res.json();
                }
            );


    if(error){return <h1> Da ist etwas schiefgelaufen :(</h1>}
    if(isLoading){return <h1>Loading...</h1>}

    console.log({data});

    return(
        //<Parallax speed={-30}>
        <Container className="container">
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
                        image={data?.image}
                    />
                </Grid>
                <Grid xs={6} sm={6} md={6} lg={6}>
                    <Grid className="name">
                        {data?.name}
                    </Grid>
                    <Grid className="beschreibung">
                        {data?.beschreibung}
                    </Grid>
                    <Grid className="price">
                        {data?.preis} €
                    </Grid>
                    <Grid className="ausleihe">
                        <DatePicker beschreibung='Ausleihdatum'/>
                    </Grid>
                    <Grid className="rückgabe">
                        <DatePicker beschreibung='Rückgabedatum'/>
                    </Grid>
                    <Grid className="addToCart">
                        <Button>
                            <AddShoppingCartIcon />
                        </Button>
                    </Grid>
                </Grid>
                
            </Grid>
        </Card>
    </Container>
        //</Parallax>
    )



}