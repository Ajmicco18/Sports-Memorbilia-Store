import { Box, Button, Typography, Stack } from "@mui/material"

export const ConfirmationCards = ({ price, description, quantity, imgUrl }) => {

    return (
        <>
            <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} width={"85%"} justifyContent={"space-between"} alignItems={"center"}
                sx={{
                    padding: "5px",
                    backgroundColor: "white",
                    border: "2px solid #002D72",
                    borderRadius: 1
                }}>
                {/*Cart Item Content*/}
                <Box component={"img"} src={imgUrl} width={120} height={120} />
                <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2} justifyContent={"center"} alignItems={"center"}>
                    <Typography>{description}</Typography>
                    <Typography>{price}</Typography>
                    <Typography>Qty: {quantity}</Typography>
                </Box>
            </Box>
        </>
    )

}