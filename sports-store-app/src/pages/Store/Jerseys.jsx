import React from 'react'
import { ProductCards } from '../../components/products/productCard'
import { Box, Container, Typography } from '@mui/material'
import bonds from "../../assets/images/bonds.png"
import ohtani from "../../assets/images/ohtani.png"
import ohioState from "../../assets/images/ohioState.png"
import warriors from "../../assets/images/warriors.png"

export default function Jerseys() {
    const jerseys = [{ price: "$12.45", description: "Barry Bonds 1986 Rookie Card", imgUrl: bonds, productUrl: "/trading-cards/1" },
    { price: "$99.99", description: "Official Shohei Ohtani Game Jersey", imgUrl: ohtani, productUrl: "/jerseys/1" },
    { price: "$20.00", description: "Anthracite Ohio State Hat", imgUrl: ohioState, productUrl: "/apparel/1" },
    { price: "$40.00", description: "Nike Golden State Warriors Hoodie", imgUrl: warriors, productUrl: "/apparel/2" },
    ]

    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Typography variant='h4' sx={{ textDecoration: "underline" }} color='#E81828' textAlign={"center"}> Jerseys</Typography>
            <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"100%"} sx={{ gap: 2 }} mt={2} mb={2} alignItems={"center"} justifyContent={"center"} >
                {jerseys.map((product, index) =>
                    <Box key={index} width={{ xs: "100%", md: "20%" }} margin={"auto"} component={"a"} sx={{ textDecoration: "none" }} href={product.productUrl}>
                        <ProductCards price={product.price} description={product.description} imgUrl={product.imgUrl} />
                    </Box>
                )}
            </Box>
            <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"100%"} sx={{ gap: 2 }} marginTop={2} alignItems={"center"} justifyContent={"center"} >
                {jerseys.map((product, index) =>
                    <Box key={index} width={{ xs: "100%", md: "20%" }} margin={"auto"} component={"a"} sx={{ textDecoration: "none" }} href={product.productUrl}>
                        <ProductCards price={product.price} description={product.description} imgUrl={product.imgUrl} />
                    </Box>
                )}
            </Box>
        </Container>
    )
}
