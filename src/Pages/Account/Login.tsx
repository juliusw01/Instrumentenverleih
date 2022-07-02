import React, {useState} from "react";

import Grid from "@mui/material/Grid";
import {
    Box,
    Container,
    TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {setCookie} from "../../CookieHandler";
import {useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import md5 from "md5";
import { Any } from "@react-spring/types";


export default function Login() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const backendURL = `http://127.0.0.1:8080/benutzer/login`;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({isError: false, msg: "No Error"});
    const {
        setValue,
        handleSubmit,
        formState: {errors},
        control,
    } = useForm();

    

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };

    const handleSubmitClick = async () => {
        console.log('In handleSubmitClick')
        let redirectHome: boolean = false;
        setIsLoading(true);
        let passwordToSend: string;
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: userName,
                passwordHash: md5(userPassword),
            }),
        };
        const response = await fetch(backendURL, requestOptions);
        if (!response.ok) {
            console.log('response not okay')
            setError({isError: true, msg: `Fehler: ${response.statusText}`});
        } else if (response.ok) {
            console.log('response ok')
            const data: any = await response.json();
            setError({isError: false, msg: "No error"});
            setCookie("userId", data.id, 7);
            redirectHome = true;
        }
        setIsLoading(false);
        if (redirectHome) {
            console.log('--> redirect Home')
            redirectToHome();
        }
    };

    if (isLoading)
        return (
            <p>Loading</p>
        );

    return (
        <div 
        >
            <Container sx={{mt: 2}}
                id ="singInPage-container"
                component="main"
                maxWidth="xs"
                className="main"
            >
                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5" className="text">
                        Anmelden
                    </Typography>
                    <form className="{classes.form}" noValidate>
                        <Controller
                            name="userName"
                            control={control}
                            rules={{required: true, minLength: 3}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Benutzername"
                                    autoFocus
                                    onChange={(e: any) => {
                                        setUserName(e.target.value);
                                        setValue("userName", e.target.value);
                                        return;
                                    }}
                                    value={userName}
                                    //error={errors.userName}
                                    InputLabelProps={{
                                      style: {
                                        color: "white"
                                      }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="userPassword"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,
                                maxLength: 32,
                            }}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Passwort"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e: any) => {
                                        setUserPassword(e.target.value);
                                        setValue("userPassword", e.target.value);
                                        return;
                                    }}
                                    InputLabelProps={{
                                      style: {
                                        color: "white"
                                      }
                                    }}
                                />
                            )}
                        />
                        <br/>
                        {error.isError && (
                            <small style={{color: "red"}}>
                                Passwort und/oder Benutzername sind falsch
                            </small>
                        )}
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                borderColor: "rgba(5,10,15,255)",
                                color: "white"
                            }}
                            className="{classes.submit}"
                            //onClick={console.log}
                            //href="/"
                            //onClick={handleSubmit(handleSubmitClick)}
                        >
                            Anmelden
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/register" variant="body2" style={{color: "#ffff"}}>
                                    {"Registrieren"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </div>
    );
} 