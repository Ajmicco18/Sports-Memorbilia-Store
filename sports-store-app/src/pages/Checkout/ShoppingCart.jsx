import { React, useEffect, useState } from 'react'
import { CartCards } from '../../components/cart/cartCard'
import { Box, Button, Container, Typography } from '@mui/material'
import bonds from "../../assets/images/bonds.png"
import ohtani from "../../assets/images/ohtani.png"
import ohioState from "../../assets/images/ohioState.png"
import warriors from "../../assets/images/warriors.png"

export default function ShoppingCart() {
    const apparel = [{ price: "$12.45", description: "Barry Bonds 1986 Rookie Card", imgUrl: bonds, quantity: 3, category: "trading-cards", id: 1 },
    { price: "$99.99", description: "Official Shohei Ohtani Game Jersey", imgUrl: ohtani, quantity: 1, category: "jerseys", id: 2 },
    { price: "$20.00", description: "Anthracite Ohio State Hat", imgUrl: ohioState, quantity: 1, category: "apparel", id: 3 },
    { price: "$40.00", description: "Nike Golden State Warriors Hoodie", imgUrl: warriors, quantity: 2, category: "apparel", id: 4 },
    ]

    const [total, setTotal] = useState(0);

    //need a getCartItem API call


    //Function to get the total cost of the items in the cart
    useEffect(() => {
        // Sum up the numeric values (strip the leading "$")
        const sum = apparel.reduce((acc, item) => {
            const value = parseFloat(item.price.replace(/^\$/, ""));
            return acc + (value * item.quantity);
        }, 0);
        setTotal(sum.toFixed(2));
    }, [apparel]);

    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 2 }}>
                <Typography variant='h4' sx={{ textDecoration: "underline" }} color='#E81828' textAlign={"center"}> Your Cart</Typography>
                <Box display={"flex"} flexDirection={"column"} width={"100%"} alignItems={"center"} justifyContent={"center"}>

                    {/*Mapping the contents of the cart and rendering them with the CartCards component */}
                    <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={4} mt={2} mb={2}>
                        {apparel.map((product, index) =>
                            <CartCards key={index}
                                price={product.price}
                                description={product.description}
                                imgUrl={product.imgUrl}
                                quantity={product.quantity}
                                category={product.category}
                                id={product.id} />)}
                    </Box>

                    {/*The subtotal of the cart items and the checkout button*/}
                    <Box display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        gap={4}
                        alignItems={"center"}
                        sx={{
                            padding: "10px",
                            backgroundColor: "white",
                            border: "2px solid #002D72",
                            borderRadius: 1
                        }}>
                        <Typography variant='h5'>Subtotal: ${total}</Typography>
                        <Button href='/shipping'
                            sx={{
                                backgroundColor: "#002D72",
                                color: "white",
                                "&:hover": { backgroundColor: "#E81828" }
                            }}>
                            Checkout
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
