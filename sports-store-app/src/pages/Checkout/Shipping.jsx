import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from '@mui/material'

export default function Shipping() {
    {/*Shipping Variables*/ }
    const [fName, setFName] = React.useState("")
    const [lName, setLName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [textAlert, setTextAlert] = React.useState(false)
    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [zip, setZip] = React.useState("")

    //US states for the state select field
    const US_STATES = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ]

    {/*Submission Function*/ }
    const handleSubmit = () => {
        setFName("")
        setLName("")
        setEmail("")
        setAddress("")
        setPhone("")
        setTextAlert(false)
        setState("")
        setCity("")
        setZip("")
    }

    return (
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: 4 }}>
            <Box
                width={350}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: 2, backgroundColor: "#002D72", padding: "15px", borderRadius: 2 }}
                justifyContent={"center"}
                alignItems={"center"} >
                <Typography variant='h4' textAlign={"center"} color='white'>Shipping</Typography>
                {/*First Name Field*/}
                <TextField
                    variant='outlined'
                    value={fName}
                    onChange={(event) => setFName(event.target.value)}
                    label="First Name"
                    placeholder='First Name'
                    required
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
                {/*Last Name Field*/}
                <TextField
                    variant='outlined'
                    value={lName}
                    onChange={(event) => setLName(event.target.value)}
                    label="Last Name"
                    placeholder='Last Name'
                    required
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
                {/*Email Field*/}
                <TextField
                    variant='outlined'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                    placeholder='Email'
                    type='email'
                    required
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
                    }} >
                </TextField>
                {/*Address Field*/}
                <TextField
                    variant='outlined'
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    label="Address"
                    placeholder='123 Easy Street'
                    required
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
                    }} >
                </TextField>
                {/*City Field*/}
                <TextField
                    variant='outlined'
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    label="City"
                    placeholder='City'
                    required
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
                    }} >
                </TextField>
                <Stack direction="row"
                    spacing={2}               // ← gap between fields
                    sx={{ width: '100%' }}>
                    {/*State Field*/}
                    <TextField
                        variant='outlined'
                        value={state}
                        select
                        onChange={(event) => setState(event.target.value)}
                        label="State"
                        placeholder='State'
                        required
                        fullWidth
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: "#E81828",
                                "&.Mui-focused": { color: "#E81828" },
                                width: "100%"
                            },

                            // style the input wrapper
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
                        {US_STATES.map(abbrev => (
                            <MenuItem key={abbrev} value={abbrev}>
                                {abbrev}
                            </MenuItem>
                        ))}
                    </TextField>
                    {/*Zip Code Field*/}
                    <TextField
                        variant='outlined'
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                        label="Zip Code"
                        placeholder='Zip'
                        required
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
                                },
                            }
                        }} >
                    </TextField>
                </Stack>

                {/*Phone Number Field*/}
                <TextField
                    variant='outlined'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    label="Phone Number"
                    placeholder='(123)-456-7890'
                    type='phone'
                    required
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
                    }} >
                </TextField>
                {/*Text Alert Field*/}
                <FormControlLabel
                    control={<Checkbox checked={textAlert} onChange={(event) => setTextAlert(event.target.checked)} sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
                    label="Sign up for text alerts"
                    sx={{ color: "white" }} />
                {/*Submission Button*/}
                <Button onClick={handleSubmit} href="/payment" sx={{ minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "white", color: "#E81828" } }}>
                    Continue
                </Button>
            </Box>
        </Container>
    )
}
