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
import Cookies from 'js-cookie';
import { SetStateAction, useState } from "react";
import React from "react";



export default function Detailseite(this: any, props:any){

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
    console.log({apiURL});

    var counter : number = 0; 
    if(!Cookies.get("counter")){
        Cookies.set("counter", counter.toString(), { path: "/" }); 
    } 

    function handleCookie() {
        counter = parseInt(Cookies.get("counter")!) + 1;
        console.log(counter);
        Cookies.set("instrumentID" + counter.toString(), data?.id, { path: "/" });  
        Cookies.set("instrumentPreis" + counter.toString(), data?.preis, { path: "/" });
        Cookies.set("instrumentName" + counter.toString(), data?.name, { path: "/" }); 
        Cookies.set("counter", counter.toString(), { path: "/" }); 
      }

      const [date, setStartDate] = useState(new Date());

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
                        <Button onClick={handleCookie}>
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

function setStartDate(date: any) {
    throw new Error("Function not implemented.");
}
