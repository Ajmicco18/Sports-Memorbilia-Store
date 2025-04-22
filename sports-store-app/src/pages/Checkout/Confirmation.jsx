import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Confirmation() {

    //random confirmation ID variable
    const [id, setID] = useState("")

    //function to generate random 4 digit segment for ID
    const generateSegment = () => {
        return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    }

    //function to join the segments together and create the ID
    const generateID = () => {
        return [generateSegment(), generateSegment(), generateSegment()].join('-');
    }

    useEffect(() => {
        setID(generateID(generateSegment()))
    }, [])


    return (
        <Container maxWidth="xl" sx={{ mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }} >
            <Box display={"flex"}
                flexDirection={"column"}
                width={"85%"}
                gap={4}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    padding: "5px",
                    backgroundColor: "white",
                    border: "2px solid #002D72",
                    borderRadius: 1
                }}>
                <Typography variant='h4' color='#E81828' textAlign={"center"}> Order Completed!</Typography>
                <Typography variant='p' fontSize={"20px"} color='#E81828' textAlign={"center"}>
                    Your order ID is {id}. Please check your email for an order
                    confirmation and order tracking information.
                </Typography>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={2}>
                    <Button href='/'
                        sx={{
                            padding: "10px",
                            backgroundColor: "#002D72",
                            color: "white",
                            width: 200,
                            "&:hover": { backgroundColor: "#E81828" }
                        }}>
                        Home
                    </Button>
                    <Button href='/apparel'
                        sx={{
                            padding: "10px",
                            backgroundColor: "#002D72",
                            color: "white",
                            width: 200,
                            "&:hover": { backgroundColor: "#E81828" }
                        }}>
                        Continue Shopping
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}
