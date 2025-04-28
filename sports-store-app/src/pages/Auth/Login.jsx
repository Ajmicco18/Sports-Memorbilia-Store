import React from 'react'
import axios from "axios";
import {
    Box,
    Button,
    Container,
    Link,
    TextField,
    Typography,
} from '@mui/material'

const BASE_URL = import.meta.env.VITE_API_URL

export default function Login() {
    {/*Login Variables */ }
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = async () => {
        try {

            const response = await axios.post(`${BASE_URL}/login`, {
                email: email,
                password: password
            })
            console.log(localStorage.getItem('token'))
            console.log("API response:", response.data);
            localStorage.setItem('token', response.data.access_token)
            window.location.href = "/";
        }
        catch (error) {
            console.error("Error:", error);
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessage("Incorrect email or password. Please try again.");
                } else if (error.response.status === 500) {
                    setErrorMessage("Server error. Please try again later.");
                } else {
                    setErrorMessage("An unexpected error occurred. Please try again.");
                }
            } else {
                setErrorMessage("Unable to connect to the server. Please check your internet connection.");
            }
        }

        setEmail('')
        setPassword('')
    }



    return (
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: 4 }}>
            <Box
                width={400}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: 2, backgroundColor: "#002D72", padding: "10px", borderRadius: 2 }}
                justifyContent={"center"}
                alignItems={"center"} >
                <Typography variant='h4' textAlign={"center"} color='white'>Login</Typography>

                {/*Email Field*/}
                <TextField
                    variant='outlined'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                    placeholder='Email'
                    required
                    type='email'
                    fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        //style the input wrapper
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "white",
                            color: "#002D72",

                            // default border
                            "& fieldset": {
                                borderColor: "#002D72"
                            },
                            // on hover
                            "&:hover fieldset": {
                                borderColor: "#E81828"
                            },
                            // when focused
                            "&.Mui-focused fieldset": {
                                borderColor: "#E81828"
                            }
                        }
                    }}
                >
                </TextField>

                {/*Password Field*/}
                <TextField
                    variant='outlined'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    label="Password"
                    placeholder='Password'
                    required
                    type='password'
                    fullWidth
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        // style the input wrapper
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "white",
                            color: "#002D72",

                            // default border
                            "& fieldset": {
                                borderColor: "#002D72"
                            },
                            // on hover
                            "&:hover fieldset": {
                                borderColor: "#E81828"
                            },
                            // when focused
                            "&.Mui-focused fieldset": {
                                borderColor: "#E81828"
                            }
                        }
                    }}
                >
                </TextField>

                {/*Submission Button*/}
                <Button onClick={handleSubmit} sx={{ minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "white", color: "#E81828" } }}>
                    Submit
                </Button>

                {/*Don't Have an Account Text and Link to Register Page*/}
                <Typography variant='p' textAlign={"center"} color='white'>
                    Don't have an account? {""}
                    <Link
                        href="/auth/register"
                        underline="none"
                        sx={{
                            color: "#E81828",
                            textDecoration: "none",
                            "&:hover": {
                                color: "white",
                                textDecoration: "none"
                            }
                        }}
                    >
                        Register
                    </Link>
                </Typography>
            </Box>
        </Container>
    )
}
