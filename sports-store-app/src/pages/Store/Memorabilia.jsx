import * as React from 'react';
import { ProductCards } from '../../components/products/ProductCard'
import { Box, Container, Typography } from '@mui/material'

export default function Memorabilia({ productData }) {
    const [productDetails, setProductDetails] = React.useState([])

    React.useEffect(() => {
        if (!productData) return;

        const filteredProducts = Array.isArray(productData) ?
            productData.filter(product => product.category === "Memorabilia") :
            [];  // Empty array if it's not an array
        setProductDetails(filteredProducts);
    }, [productData]);

    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Typography variant='h4' sx={{ textDecoration: "underline" }} color='#E81828' textAlign={"center"}>Memorabilia</Typography>
            <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"100%"} sx={{ gap: 2 }} mt={2} mb={2} alignItems={"center"} justifyContent={"center"} >
                {productDetails.map((product, index) =>
                    <Box key={index} width={{ xs: "100%", md: "20%" }} margin={"auto"} component={"a"} sx={{ textDecoration: "none" }} href={`memorabilia/${product.id}`}>
                        <ProductCards price={`$${product.price}`} description={product.description} imgUrl={product.product_image} />
                    </Box>
                )}
            </Box>
            <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"100%"} sx={{ gap: 2 }} marginTop={2} alignItems={"center"} justifyContent={"center"} >
                {productDetails.map((product, index) =>
                    <Box key={index} width={{ xs: "100%", md: "20%" }} margin={"auto"} component={"a"} sx={{ textDecoration: "none" }} href={`memorabilia/${product.id}`}>
                        <ProductCards price={`$${product.price}`} description={product.description} imgUrl={product.product_image} />
                    </Box>
                )}
            </Box>
        </Container>
    )
}
