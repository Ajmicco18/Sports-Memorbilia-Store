import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { ProductCards } from '../../components/products/productCard'
import bonds from "../../assets/images/bonds.png"
import ohtani from "../../assets/images/ohtani.png"
import ohioState from "../../assets/images/ohioState.png"
import warriors from "../../assets/images/warriors.png"
import "../../index.css"

export default function Home() {

    {/*List of products to be mapped to the ProductCards component*/ }
    const products = [{ price: "$12.45", description: "Barry Bonds 1986 Rookie Card", imgUrl: bonds, productUrl: "/trading-cards/1" },
    { price: "$99.99", description: "Official Shohei Ohtani Game Jersey", imgUrl: ohtani, productUrl: "/jerseys/1" },
    { price: "$20.00", description: "Anthracite Ohio State Hat", imgUrl: ohioState, productUrl: "/apparel/1" },
    { price: "$40.00", description: "Nike Golden State Warriors Hoodie", imgUrl: warriors, productUrl: "/apparel/2" },
    ]

    return (
        <Container maxWidth="xl" >
            {/*Hero Image and Overlapped Text Content*/}
            <Box className="hero" width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} >
                    <Typography variant='h4' textAlign={"center"} sx={{ color: "#002D72", fontWeight: "bold", position: "relative" }}>Shop the latest products!</Typography>
                    <Button
                        href="/store/jerseys"
                        sx={{ textAlign: "center", padding: "15px", width: "150px", backgroundColor: "#002D72", color: "white", "&:hover": { color: "#002D72", backgroundColor: "white" } }}
                    >Shop Now!</Button>
                </Box>
            </Box>
            {/*Trending Products with images, descriptions, prices and link to product page*/}
            <Typography variant='h4' color='#002D72' textAlign={"left"}> Trending</Typography>
            <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"100%"} sx={{ gap: 2 }} alignItems={"center"} justifyContent={"center"} >
                {products.map((product, index) =>
                    <Box key={index} width={{ xs: "100%", md: "20%" }} margin={"auto"} component={"a"} sx={{ textDecoration: "none" }} href={product.productUrl}>
                        <ProductCards price={product.price} description={product.description} imgUrl={product.imgUrl} />
                    </Box>
                )}
            </Box>
        </Container>
    )
}
