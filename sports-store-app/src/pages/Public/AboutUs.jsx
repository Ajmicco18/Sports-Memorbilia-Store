import React from 'react'
import { Container, Box, Typography } from "@mui/material"

export default function AboutUs() {
    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
            <Typography variant='h4' sx={{ textDecoration: "underline" }} color='#E81828' textAlign={"center"}>About Us</Typography>

            {/*About Us Information */}
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} justifySelf={"center"} width={"65%"} marginTop={2}>
                <Typography variant='p' textAlign={"center"} color='#002D72' fontSize={"20px"}>
                    Founded in 2024, Fantopia Sports is your premier online destination for everything a true fan could dream of.
                    From authentic jerseys and hard‑to‑find memorabilia to rare trading cards and stylish sportswear,
                    we bring the excitement of the game straight to your doorstep. Our carefully curated collection,
                    fast shipping, and dedicated customer service ensure every purchase feels like a victory. At Fantopia
                    Sports, we live and breathe the passion of sports—so you can, too.
                </Typography>
            </Box>
        </Container>

    )
}
