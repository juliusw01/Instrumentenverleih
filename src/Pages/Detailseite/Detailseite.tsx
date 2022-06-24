import { Button, Card, CardMedia, Container, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Detailseite.css'
import { Link } from "react-router-dom";

export default function Detailseite(props:any){

    const {
        image,
        name,
        beschreibung,
        preis
    }=props

    return(
        <h1>Test: {name}</h1>
    )



}