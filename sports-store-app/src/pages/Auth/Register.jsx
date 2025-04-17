import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Link,
    TextField,
    Typography,
    Stack
} from '@mui/material'

export default function Register() {
    const [fName, setFName] = React.useState("")
    const [lName, setLName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [emailAlert, setEmailAlert] = React.useState(false)
    const [textAlert, setTextAlert] = React.useState(false)
    const [password, setPassword] = React.useState("")
    const [confirmPass, setConfirmPass] = React.useState("")

    const handleSubmit = () => {
        setFName("")
        setLName("")
        setEmail("")
        setPhone("")
        setEmailAlert(false)
        setTextAlert(false)
        setPassword("")
        setConfirmPass("")
    }

    return (
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: 4 }}>
            <Box
                minWidth={400}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: 2, backgroundColor: "#002D72", padding: "10px", borderRadius: 2 }}
                justifyContent={"center"}
                alignItems={"center"} >
                <Typography variant='h4' textAlign={"center"} color='white'>Register</Typography>
                <TextField
                    variant='outlined'
                    value={fName}
                    onChange={(event) => setFName(event.target.value)}
                    label="First Name"
                    placeholder='First Name'
                    required
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        // 2) style the input wrapper
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
                <TextField
                    variant='outlined'
                    value={lName}
                    onChange={(event) => setLName(event.target.value)}
                    label="Last Name"
                    placeholder='Last Name'
                    required
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        // 2) style the input wrapper
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
                <TextField
                    variant='outlined'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                    placeholder='Email'
                    type='email'
                    required
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        // 2) style the input wrapper
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
                    }} >
                </TextField>
                <TextField
                    variant='outlined'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    label="Phone Number"
                    placeholder='(123)-456-7890'
                    type='phone'
                    required
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        // 2) style the input wrapper
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
                    }} >
                </TextField>
                <Box sx={{ alignSelf: "center", ml: 1 }}>
                    <Stack direction="column">
                        <FormControlLabel
                            control={<Checkbox checked={emailAlert} onChange={(event) => setEmailAlert(event.target.checked)} sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
                            label="Sign up for email alerts"
                            sx={{ color: "white" }} />
                        <FormControlLabel
                            control={<Checkbox checked={textAlert} onChange={(event) => setTextAlert(event.target.checked)} sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
                            label="Sign up for text alerts"
                            sx={{ color: "white" }} />
                    </Stack>
                </Box>
                <TextField
                    variant='outlined'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    label="Password"
                    placeholder='Password'
                    type='password'
                    required
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#E81828",
                            "&.Mui-focused": { color: "#E81828" }
                        },

                        // 2) style the input wrapper
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
                    }} >
                </TextField>
                {confirmPass !== password ?
                    <TextField
                        variant='outlined'
                        value={confirmPass}
                        onChange={(event) => setConfirmPass(event.target.value)}
                        label="Confirm Password"
                        placeholder=''
                        required
                        type='password'
                        error
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: "#E81828",
                                "&.Mui-focused": { color: "#E81828" }
                            },

                            // 2) style the input wrapper
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                                color: "#E81828",

                                // default border
                                "& fieldset": {
                                    borderColor: "#E81828"
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
                        }} >
                    </TextField> :
                    <TextField
                        variant='outlined'
                        value={confirmPass}
                        onChange={(event) => setConfirmPass(event.target.value)}
                        label="Confirm Password"
                        placeholder=''
                        type='password'
                        required
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: "#E81828",
                                "&.Mui-focused": { color: "#E81828" }
                            },

                            // 2) style the input wrapper
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
                        }} >
                    </TextField>}
                <Button onClick={handleSubmit} sx={{ minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "white", color: "#E81828" } }}>
                    Submit
                </Button>
                <Typography variant='p' textAlign={"center"} color='white'>
                    Already have an account? {""}
                    <Link
                        href="/auth/login"
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
                        Login
                    </Link>
                </Typography>
            </Box>
        </Container>

    )
}
