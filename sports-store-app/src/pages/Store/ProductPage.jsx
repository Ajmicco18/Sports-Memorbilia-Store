import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {
    Box,
    Button,
    Container,
    FormControlLabel,
    FormControl,
    FormLabel,
    MenuItem,
    Typography,
    TextField,
    RadioGroup,
    Radio,
} from '@mui/material'

const BASE_URL = import.meta.env.VITE_API_URL

export default function ProductPages() {

    const [shipping, setShipping] = React.useState("")
    const [quantity, setQuantity] = React.useState(1)
    const [size, setSize] = React.useState("xs")
    const [productData, setProductData] = React.useState({
        description: "",
        category: "",
        price: "",
        product_image: "",
        size: ""
    })

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const sizes = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]

    const handleSubmit = () => {
        console.log("Submitted")
    }

    const { id } = useParams();

    React.useEffect(() => {
        const fetchProduct = async (id) => {
            try {
                const response = await axios.get(`${BASE_URL}/products/${id}`)
                console.log("API response:", response.data);
                setProductData(response.data)
            } catch (error) {
                // Handle errors if the request fails
                console.error("Error:", error);
            }
        };
        fetchProduct(id);
    }, [id]);

    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 2 }}>
                <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={4} width={"100%"} justifyContent={"center"} alignItems={"center"} >
                    <Box width={350} component={"img"} src={productData.product_image} height={400} />
                    <Box display={"flex"} flexDirection={"column"} width={"45%"} sx={{ backgroundColor: "white" }} borderRadius={"5px"} padding={"20px"}>
                        {/*Description Field*/}
                        <Typography variant='p' sx={{ fontSize: { xs: "15px", md: "30px" }, padding: "5px" }} color='#002D72'>Description: {productData.description}</Typography>
                        {/*Price Field*/}
                        <Typography variant='p' sx={{ fontSize: { xs: "15px", md: "30px" }, padding: "5px" }} color='#002D72'>Price: ${productData.price}</Typography>
                        {/*Quantity Field*/}
                        <TextField
                            variant='outlined'
                            value={quantity}
                            select
                            onChange={(event) => setQuantity(event.target.value)}
                            label="Quantity"
                            placeholder="Quantity"
                            required
                            fullWidth
                            sx={{
                                mt: 2,
                                "& .MuiInputLabel-root": {
                                    color: "#002D72",
                                    "&.Mui-focused": { color: "#E81828" },
                                    padding: "5px",
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
                                    }
                                }
                            }} >
                            {numbers.map((number, index) => (
                                <MenuItem key={index} value={number}>
                                    {number}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/*Size Field*/}
                        <TextField
                            variant='outlined'
                            value={size}
                            select
                            onChange={(event) => setSize(event.target.value)}
                            label="Size"
                            placeholder="Size"
                            required
                            fullWidth
                            sx={{
                                mt: 2,
                                "& .MuiInputLabel-root": {
                                    color: "#002D72",
                                    "&.Mui-focused": { color: "#E81828" },
                                    padding: "5px",
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
                                    }
                                }
                            }} >
                            {sizes.map((_size, index) => (
                                <MenuItem key={index} value={_size}>
                                    {_size}
                                </MenuItem>
                            ))}
                        </TextField>
                        <FormControl component="fieldset" sx={{ mt: 2 }}>
                            <FormLabel
                                component="legend"
                                sx={{
                                    color: '#002D72',
                                    padding: "5px",
                                    fontSize: { xs: "15px", md: "25px" },
                                    '&.Mui-focused': {
                                        color: '#002D72',
                                    },
                                }}
                            >
                                Shipping:
                            </FormLabel>
                            <RadioGroup
                                row
                                value={shipping}
                                onChange={e => setShipping(e.target.value)}
                                sx={{ mt: 1 }}
                            >
                                <FormControlLabel
                                    value="Standard"
                                    control={<Radio sx={{ color: '#002D72', '&.Mui-checked': { color: '#E81828' } }} />}
                                    sx={{ color: "#002D72", fontSize: "30px" }}
                                    label="Standard"
                                />
                                <FormControlLabel
                                    value="Express"
                                    control={<Radio sx={{ color: '#002D72', '&.Mui-checked': { color: '#E81828' } }} />}
                                    sx={{ color: "#002D72", fontSize: "30px" }}
                                    label="Express"
                                />
                            </RadioGroup>
                        </FormControl>
                        {/*Submission Button*/}
                        <Button onClick={handleSubmit} href="/cart" sx={{ mt: 5, minWidth: "150px", backgroundColor: "#E81828", borderRadius: 2, color: "white", "&:hover": { backgroundColor: "white", color: "#E81828" } }}>
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Container>

        </>
    )
}