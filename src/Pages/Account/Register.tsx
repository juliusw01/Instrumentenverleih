import React, { useState } from "react";
import {Avatar, Box, Button, Container, Grid, IconButton, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { setCookie } from "../../CookieHandler";
import md5 from "md5";

function Register() {
    const [userName, setUserName]: any = useState("");
    const [firstName, setFirstName]: any = useState("");
    const [lastName, setLastName]: any = useState("");
    const [email, setEmail]: any = useState("");
    const [password, setPassword]: any = useState("");
    const [confirmPassword, setConfirmPassword]: any = useState("");
    const [address, setAddress]: any = useState("");
    const [isLoading, setIsLoading]: any = useState(false);
    const [error, setError]: any = useState({ isError: false, msg: "No Error" });
    const [agree, setAgree]: any = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0 && lastName.length > 0 && firstName.length > 0 && address.length > 0;
      }
  
    const {
      setValue,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm();
  
    const apiUrlAll = `http://localhost:8080/benutzer/add`;
  
    const redirectToHome = () => {
      navigate("/");
    };
  
    const handleSubmitClick = async () => {
      let redirectHome: boolean = false;
      setIsLoading(true);
  
      if (password === confirmPassword) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userName,
            firstName: firstName,
            name: lastName,
            email: email,
            password: md5(password),
            address: address,
          }),
        };
        const response = await fetch(apiUrlAll, requestOptions);
        if (!response.ok) {
            console.log('Nicht ok')
          setError({ isError: true, msg: `Fehler: ${response.statusText}` });
          setAgree(false);
        } else if (response.ok) {
          const data: any = await response.json();
          setError({ isError: false, msg: "No error" });
          setCookie("userId", data.id, 7);
          redirectHome = true;
        }
        setIsLoading(false);
        if (redirectHome) {
          redirectToHome();
        }
      } else {
        setError({
          isError: true,
          msg: "Die Passwörter stimmen nicht überein!",
        });
      }
      setIsLoading(false);
    };
    if (isLoading)
      return (<p>Loading</p>
      );
  
    let navigate = useNavigate();

    return (
        <div>
            <Container sx={{mt: 2}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5" className="text">
                        Registrierung
                    </Typography>
                    <form noValidate>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                            name="userName"
                            control={control}
                            rules={{ required: true, minLength: 3 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
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
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                autoComplete="given-name"
                                required
                                fullWidth
                                label="Vorname"
                                autoFocus
                                onChange={(e: any) => {
                                    setFirstName(e.target.value);
                                    setValue("firstName", e.target.value);
                                    return;
                                }}
                                value={firstName}
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Nachname"
                                autoComplete="family-name"
                                onChange={(e: any) => {
                                    setLastName(e.target.value);
                                    setValue("lastName", e.target.value);
                                    return;
                                }}
                                value={lastName}
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                                pattern:
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i, // eslint-disable-line no-useless-escape
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="E-Mail-Adresse"
                                autoComplete="email"
                                onChange={(e: any) => {
                                    setEmail(e.target.value);
                                    setValue("email", e.target.value);
                                    return;
                                }}
                                value={email}
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,
                                maxLength: 32,
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Passwort"
                                type="password"
                                autoComplete="new-password"
                                onChange={(e: any) => {
                                    setPassword(e.target.value);
                                    setValue("password", e.target.value);
                                    return;
                                }}
                                value={password}
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />

                            {errors.password && (
                            <small color="red">
                                Das Passwort muss mindestens 8 und höchstens 32 Zeichen lang sein!
                            </small>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,
                                maxLength: 32,
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Bestätige Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e: any) => {
                                    setConfirmPassword(e.target.value);
                                    setValue("confirmPassword", e.target.value);
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
                        </Grid>
                            <Grid item xs={12}>
                            <Controller
                                name="address"
                                control={control}
                                rules={{ required: true, minLength: 3 }}
                                render={({ field }) => (
                                <TextField
                                    {...field}
                                    required
                                    fullWidth
                                    label="Adresse"
                                    value={address}
                                    onChange={(e: any) => {
                                    setAddress(e.target.value);
                                    setValue("street", e.target.value);
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
                            </Grid>
                        </Grid>
                        <Button
                        id="signUp-button"
                        disabled={!validateForm()}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit(handleSubmitClick)}
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}     
                        >
                        Registrieren
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2" style={{color: "#ffff"}}>
                                    {"Anmelden"}
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </form>
                </Box>
            </Container>
        </div>
    );
}

export default Register;