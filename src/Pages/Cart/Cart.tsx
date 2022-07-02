import { Button, Card, CardMedia, Container, Grid } from '@mui/material';
import { pink } from '@mui/material/colors';
import { id } from 'date-fns/locale';
import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Instrument from '../../components/Instrument';
import { IInstrument } from '../../Interfaces/IInstruments';
import PaidIcon from '@mui/icons-material/Paid';
import './Cart.css'




export default function Cart(){

    const {isLoading, error, data }: any = useQuery<IInstrument, Error, IInstrument, string>(
        "instrument", 
                async () => {const res = await fetch('http://127.0.0.1:8080/instrumente');
                    return res.json();
                }
            );

    if(error){return <h1> Da ist etwas schiefgelaufen :(</h1>}
    if(isLoading){return <h1>Loading...</h1>}

    const cart:number[] = [];
    var summe:number = 0.0;

    for(let i = 1; i <= parseInt(Cookies.get("counter")!); i++){
        let instrumentID  = Cookies.get("instrumentID" + i.toString())!;
        const apiURL = `http://127.0.0.1:8080/instrumente/${instrumentID}`; 
        cart.push(i);
        summe = summe + Number(Cookies.get("instrumentPreis" + i.toString())!);
        console.log({apiURL});
        console.log({summe});

    }
    var rounded = Math.round((summe + Number.EPSILON) * 100) / 100;
    console.log({rounded});
    return(
        <Container className="container">
        <Card
            sx={{
                bgcolor: "#333"
            }}
        >
            <Grid container xs={12} sm={12} md={12} lg={12}>
                {cart?.map (item => (
                <Grid xs={6} sm={6} md={6} lg={6}>
                    <Grid className="name">
                        {Cookies.get("instrumentName" + item.toString())!}
                    </Grid>
                    <Grid className="price">
                        {Cookies.get("instrumentPreis" + item.toString())!} €
                    </Grid>
                </Grid>
                ))}
                <Grid xs={12} sm={12} md={12} lg={12} className="summe">
                    <Grid>
                        Summe: {rounded}
                    </Grid>
                    <Grid>
                    <Button className="buchen" sx={{
                                    svg: { color: '#fff'},
                                    input:  { color: '#fff'},
                                    label:  { color: '#fff'}
                    }}>
                            <PaidIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Container>
    )
}