import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import { useState } from "react"
import Instrument from "../../components/Instrument"
import './Homepage.css'
import { Parallax } from "react-scroll-parallax"
import { useQuery, UseQueryResult } from "react-query"
import { IInstrument } from "../../Interfaces/IInstruments"
import { FC } from "react";

export default function HomePage(){
    const {isLoading, error, data }: any = useQuery<IInstrument, Error, IInstrument, string>(
        "instrument", 
                async () => {const res = await fetch('http://127.0.0.1:8080/instrumente');
                    return res.json();
                }
            );

    if(error){return <h1> Da ist etwas schiefgelaufen :(</h1>}
    if(isLoading){return <h1>Loading...</h1>}

    console.log({data});

    return(
        //<Parallax speed={-30}>
        <Container className="container">
            <Grid spacing={4} className="instruments">
                    {data?.map ((entry : any) => (
                        <Grid item key = {entry.title} xs = {12} sm={12} md={12} lg={12} className="instrument">
                            <Instrument image={entry.image} name={entry.name} beschreibung={entry.beschreibung} preis={entry.preis} id={entry.id} ></Instrument>
                        </Grid>
                    ))}
                
            </Grid>
        </Container>
        //</Parallax>
    )
}