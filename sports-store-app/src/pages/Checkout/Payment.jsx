import React, { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    FormControl,
    FormLabel,
    MenuItem,
    RadioGroup,
    Radio,
    TextField,
    Typography,
} from '@mui/material'
import { ConfirmationCards } from '../../components/cart/ConfirmationCard'
import bonds from "../../assets/images/bonds.png"
import ohtani from "../../assets/images/ohtani.png"
import ohioState from "../../assets/images/ohioState.png"
import warriors from "../../assets/images/warriors.png"

export default function Payment() {

    const apparel = [{ price: "$12.45", description: "Barry Bonds 1986 Rookie Card", imgUrl: bonds, quantity: 3, category: "trading-cards", id: 1 },
    { price: "$99.99", description: "Official Shohei Ohtani Game Jersey", imgUrl: ohtani, quantity: 1, category: "jerseys", id: 2 },
    { price: "$20.00", description: "Anthracite Ohio State Hat", imgUrl: ohioState, quantity: 1, category: "apparel", id: 3 },
    { price: "$40.00", description: "Nike Golden State Warriors Hoodie", imgUrl: warriors, quantity: 2, category: "apparel", id: 4 },
    ]

    {/*Payment Variables*/ }
    const [sameAddress, setSameAddress] = React.useState("true")
    const [cardName, setCardName] = React.useState("")
    const [cardNumber, setCardNumber] = React.useState("")
    const [expirationDate, setExpirationDate] = React.useState("")
    const [cvv, setCVV] = React.useState("")

    {/*Shipping Variables if needed*/ }
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


    const [subTotal, setSubTotal] = useState(0);
    const tax = (Math.random() * 15).toFixed(2);
    const shipping = (Math.random() * 20).toFixed(2);
    const total = (parseFloat(tax) + parseFloat(shipping) + parseFloat(subTotal)).toFixed(2)

    //Function to get the total cost of the items in the cart
    useEffect(() => {
        // Sum up the numeric values (strip the leading "$")
        const sum = apparel.reduce((acc, item) => {
            const value = parseFloat(item.price.replace(/^\$/, ""));
            return acc + (value * item.quantity);
        }, 0);
        setSubTotal(sum.toFixed(2));
    }, [apparel]);

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
        setCardName("")
        setCardNumber("")
        setCVV("")
        setExpirationDate("")
    }

    //Need an addOrder and getCart API calls

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} width={"100%"} justifyContent={"center"} alignItems={{ xs: "center", md: "flex-start" }} gap={2}>
                <Box width={{ xs: "100%", md: "45%" }}
                    display={"flex"}
                    flexDirection={"column"}
                    sx={{ backgroundColor: "white", padding: "10px", borderRadius: 2, boxSizing: 'border-box', }}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    {/*Mapping the contents of the cart and rendering them with the CartCards component */}
                    <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={4} mt={2} mb={2}>
                        {apparel.map((product, index) =>
                            <ConfirmationCards key={index}
                                price={product.price}
                                description={product.description}
                                imgUrl={product.imgUrl}
                                quantity={product.quantity}
                                category={product.category}
                                id={product.id} />)}
                    </Box>
                    <hr style={{ "color": "#002D72", "border": "none", "height": "2px", "backgroundColor": "#002D72" }}></hr>
                    <Box>
                        <Typography variant='h5'>Subtotal: ${subTotal}</Typography>
                        <Typography variant='h5'>Shipping: ${shipping}</Typography>
                        <Typography variant='h5'>Tax: ${tax}</Typography>
                        <Typography variant='h5'>Total: ${total}</Typography>
                    </Box>
                </Box>
                <Box
                    width={{ xs: "100%", md: "45%" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                    sx={{ backgroundColor: "#002D72", padding: "10px", borderRadius: 2, boxSizing: 'border-box', }}
                    justifyContent={"center"}
                    alignItems={"center"} >
                    <Typography variant='h4' textAlign={"center"} color='white'>Payment</Typography>
                    <FormControl component="fieldset">
                        <FormLabel
                            component="legend"
                            sx={{
                                color: 'white',
                                '&.Mui-focused': {
                                    color: 'white',
                                },
                            }}
                        >
                            Address
                        </FormLabel>
                        <RadioGroup
                            row
                            value={sameAddress}
                            onChange={e => setSameAddress(e.target.value)}
                            sx={{ mt: 1 }}
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#E81828' } }} />}
                                sx={{ color: "white" }}
                                label="Same as shipping"
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#E81828' } }} />}
                                sx={{ color: "white" }}
                                label="Edit"
                            />
                        </RadioGroup>
                    </FormControl>
                    {sameAddress === "false" ? <> {/*First Name Field*/}
                        < TextField
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
                                },
                                flex: '1 1 0',

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
                                flex: '1 1 0',

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
                    </>
                        :
                        null}
                    {/*Credit Card Field*/}
                    <TextField
                        variant='outlined'
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                        label="Card Number"
                        placeholder='0000-0000-0000-0000'
                        fullWidth
                        required
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
                    {/*Name on Card Field*/}
                    <TextField
                        variant='outlined'
                        value={cardName}
                        onChange={(event) => setCardName(event.target.value)}
                        label="Name on Card"
                        placeholder='Name'
                        fullWidth
                        required
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
                    {/*Expiration Date Field*/}
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Expiration Date"
                        type="date"
                        value={expirationDate}
                        onChange={e => setExpirationDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: "#E81828",
                                "&.Mui-focused": { color: "#E81828" }
                            },
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                                color: "#002D72",
                                "& fieldset": { borderColor: "#002D72" },
                                "&:hover fieldset": { borderColor: "#E81828" },
                                "&.Mui-focused fieldset": { borderColor: "#E81828" }
                            }
                        }}
                    />
                    {/*CVV Field*/}
                    <TextField
                        variant='outlined'
                        value={cvv}
                        onChange={(event) => setCVV(event.target.value)}
                        label="CVV"
                        placeholder='000'
                        fullWidth
                        required
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
                    {/*Submission Button*/}
                    <Button onClick={handleSubmit} href="/confirmation" sx={{ minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "white", color: "#E81828" } }}>
                        Continue
                    </Button>
                </Box>
            </Box>
        </Container >
    )
}
