import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    TextField,
    Typography,
    Stack
} from '@mui/material'

export default function Profile() {

    const [isEdit, setIsEdit] = React.useState(false)
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [birthday, setBirthday] = React.useState("")
    const [emailAlert, setEmailAlert] = React.useState(false)
    const [textAlert, setTextAlert] = React.useState(false)

    const handleSubmit = () => {
        setIsEdit(false)

    }

    const handleEdit = () => {
        setIsEdit(true)

    }

    return (
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: 4 }}>
            {isEdit ? <Box
                minWidth={400}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: 2, padding: "10px", borderRadius: 2 }}
                justifyContent={"center"}
                alignItems={"center"}
                border={"2px solid black"} >
                <Typography variant='h4' textAlign={"center"} color='#E81828'>My Account</Typography>
                {/*Name Field*/}
                <TextField
                    variant='outlined'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    label="Name"
                    placeholder='Name'
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
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                    placeholder='Email'
                    type='email'
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

                {/*Phone Number Field*/}
                <TextField
                    variant='outlined'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    label="Phone Number"
                    placeholder='(123)-456-7890'
                    type='phone'
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
                {/*Email Field*/}
                <TextField
                    variant='outlined'
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                    label="Birthday"
                    placeholder='Birthday'
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
                {/*Text and Email Alert Fields*/}
                <Box sx={{ alignSelf: "center", ml: 1 }}>
                    <Stack direction="row">
                        <FormControlLabel
                            control={<Checkbox checked={emailAlert} onChange={(event) => setEmailAlert(event.target.checked)} sx={{ color: "#002D72", "&.Mui-checked": { color: "#002D72" } }} />}
                            label="Email Alerts"
                            sx={{ color: "#002D72" }} />
                        <FormControlLabel
                            control={<Checkbox checked={textAlert} onChange={(event) => setTextAlert(event.target.checked)} sx={{ color: "#002D72", "&.Mui-checked": { color: "#002D72" } }} />}
                            label="Text Alerts"
                            sx={{ color: "#002D72" }} />
                    </Stack>
                </Box>
                {/*Submission Button*/}
                <Button onClick={handleSubmit} sx={{ minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "#002D72" } }}>
                    Submit
                </Button>
            </Box> :
                <Box
                    minWidth={400}
                    display={"flex"}
                    flexDirection={"column"}
                    sx={{ gap: 2, padding: "10px", borderRadius: 2 }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid black"} >
                    <Typography variant='h4' textAlign={"center"} color='#E81828'>My Account</Typography>
                    {/*Name Field*/}
                    <TextField
                        variant='outlined'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        label="Name"
                        placeholder='Name'
                        disabled
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        label="Email"
                        placeholder='Email'
                        type='email'
                        disabled
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

                    {/*Phone Number Field*/}
                    <TextField
                        variant='outlined'
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        label="Phone Number"
                        placeholder='(123)-456-7890'
                        type='phone'
                        disabled
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
                    {/*Email Field*/}
                    <TextField
                        variant='outlined'
                        value={birthday}
                        onChange={(event) => setBirthday(event.target.value)}
                        label="Birthday"
                        placeholder='Birthday'
                        disabled
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
                    {/*Text and Email Alert Fields*/}
                    <Box sx={{ alignSelf: "center", ml: 1 }}>
                        <Stack direction="row">
                            <FormControlLabel
                                control={<Checkbox disabled checked={emailAlert} onChange={(event) => setEmailAlert(event.target.checked)} sx={{ color: "#002D72", "&.Mui-checked": { color: "#002D72" } }} />}
                                label="Email Alerts"
                                sx={{ color: "#002D72" }} />
                            <FormControlLabel
                                control={<Checkbox disabled checked={textAlert} onChange={(event) => setTextAlert(event.target.checked)} sx={{ color: "#002D72", "&.Mui-checked": { color: "#002D72" } }} />}
                                label="Text Alerts"
                                sx={{ color: "#002D72" }} />
                        </Stack>
                    </Box>
                    {/*Edit Button*/}
                    <Button onClick={handleEdit} sx={{ minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "#002D72" } }}>
                        Edit
                    </Button>
                </Box>}

        </Container>
    )
}
