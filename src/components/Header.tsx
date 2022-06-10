import { Button, Card, Grid } from "@mui/material";
import { Container } from "@mui/system";

function Header(){

    return(
        <Container>
            <Card
                sx={{
                    bgcolor: "grey",
                    padding: "75px"
                }}
            >
                <Grid container xs={12}>
                    <Grid item xs={2}>
                        <Button>
                            Instrumente
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            News
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            Über uns
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}
export default Header