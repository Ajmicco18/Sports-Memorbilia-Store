import { Box, Button, Typography, Stack } from "@mui/material"

export const CartCards = ({ price, description, quantity, imgUrl, category, id }) => {

    const handleRemove = (id) => {
        console.log(id)
        //need an updateCart API call
    }

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
                    <Typography>Quanity: {quantity}</Typography>
                </Box>
                <Stack direction={"row"} spacing={2} mt={{ xs: 2, md: 0 }}>
                    {/*Edit Button*/}
                    <Button href={`/${category}/${id}`}
                        sx={{
                            backgroundColor: "#002D72",
                            color: "white",
                            borderRadius: 2,
                            "&:hover": { backgroundColor: "#E81828" }
                        }}>
                        Edit
                    </Button>

                    {/*Remove Button*/}
                    <Button onClick={handleRemove}
                        sx={{
                            backgroundColor: "#E81828",
                            color: "white",
                            borderRadius: 2,
                            "&:hover": { backgroundColor: "#FFFDD0", color: "#E81828" }
                        }}>
                        Remove
                    </Button>
                </Stack>
            </Box>
        </>
    )
}