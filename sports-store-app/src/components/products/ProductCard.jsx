import { Box, Typography } from "@mui/material"

export const ProductCards = ({ price, description, imgUrl }) => {
    return (
        <>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={175}
                sx={{
                    padding: "5px",
                    border: "2px solid #002D72",
                    borderRadius: 2,
                    backgroundColor: "white",
                    "&:hover": { boxShadow: "0 0 8px #002D72" },

                }}>
                {/*Product Image*/}
                <Box component="img" src={imgUrl} width={115} height={115} />

                {/*Product Description*/}
                <Typography variant="p" textAlign={"center"} sx={{ textDecoration: "none", color: "#002D72", marginTop: 2 }}>{description}</Typography>

                {/*Product Price*/}
                <Typography variant="p" textAlign={"center"} sx={{ textDecoration: "none", color: "#002D72" }}>{price}</Typography>
            </Box>
        </>
    )

}