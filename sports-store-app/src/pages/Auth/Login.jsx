import React from 'react'
import {
    Box,
    Button,
    Container,
    Link,
    TextField,
    Typography,
} from '@mui/material'

export default function Login() {
    {/*Login Variables */ }
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = () => {
        setEmail('')
        setPassword('')
    }

    //Need a login and logout API call

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
