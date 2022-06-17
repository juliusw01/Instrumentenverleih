import { Grid } from "@mui/material"

function Tiles (props:any){

    const {
        image
    } = props

    return(
        <Grid container spacing={4}>
            <Grid item xs = {4}>
                <img src= {image} alt= "../DefaultPicture/default.jpg" />
                
            </Grid>
        </Grid>
    )
}
export default Tiles