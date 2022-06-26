import { Button, Card, CardMedia, Container, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Detailseite.css'
import { Link } from "react-router-dom";
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

    const instrumentname = window.location.pathname;
    const pathname = 'http://127.0.0.1:8080/instrumente/Saxophon' + {instrumentname}; 

    const {isLoading, error, data }: any = useQuery<IInstrument, Error, IInstrument, string>(
        "instrument", 
                async () => {const res = await fetch('http://127.0.0.1:8080/instrumente/Saxophon');
                    return res.json();
                }
            );

            LicenseInfo.setLicenseKey(
                'x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e',
              );

    if(error){return <h1> Da ist etwas schiefgelaufen :(</h1>}
    if(isLoading){return <h1>Loading...</h1>}

    console.log({data});
    console.log({pathname});

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
                        {data?.preis}
                    </Grid>
                    <Grid className="ausleihe">
                        <DatePicker beschreibung='Ausleihdatum'/>
                    </Grid>
                    <Grid className="rückgabe">
                        <DatePicker beschreibung='Rückgabedatum'/>
                    </Grid>
                </Grid>
                
            </Grid>
        </Card>
    </Container>
        //</Parallax>
    )



}