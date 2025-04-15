import { Container, Box, Typography, Button, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
            <Container maxWidth="xl" style={{ "position": "static", "bottom": 0 }}>
                <hr style={{ "color": "#002D72", "border": "none", "height": "2px", "backgroundColor": "#002D72" }}></hr>
                <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} width={"100%"} height={"125px"}>
                    <Box minWidth={"25%"} height={"100%"}>
                        <Typography variant="h5" color="#E81828" fontWeight={"bold"} textAlign={"center"}>Customer Service</Typography>
                        <ul>
                            <li>
                                <Typography component={"a"} href={"/contact-us"} color="#002D72" sx={{ textDecoration: "none", "&:hover": { color: "#E81828" } }} >Contact Us</Typography>
                            </li>
                            <li><Typography component={"a"} href={"/help"} color="#002D72" sx={{ textDecoration: "none", "&:hover": { color: "#E81828" } }}>Help</Typography></li>
                        </ul>
                    </Box>
                    <Box minWidth={"25%"} height={"100%"}>
                        <Typography variant="h5" color="#E81828" fontWeight={"bold"} textAlign={"center"}>Information</Typography>
                        <ul>
                            <li>
                                <Typography component={"a"} href={"/about-us"} color="#002D72" sx={{ textDecoration: "none", "&:hover": { color: "#E81828" } }} >About Us</Typography>
                            </li>
                        </ul>
                    </Box>
                    <Box minWidth={"25%"} height={"100%"}>
                        <Typography variant="h5" color="#E81828" fontWeight={"bold"} textAlign={"center"}>Follow Us!</Typography>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <IconButton
                                size="large"
                                href="https://www.instagram.com/"
                                target="_blank"
                                sx={{ marginRight: "10px", color: "#002D72", "&:hover": { color: "#E81828" } }}>
                                <InstagramIcon></InstagramIcon>
                            </IconButton>
                            <IconButton
                                size="large"
                                href="https://www.facebook.com/"
                                target="_blank"
                                sx={{ marginRight: "10px", color: "#002D72", "&:hover": { color: "#E81828" } }}>
                                <FacebookIcon></FacebookIcon>
                            </IconButton>
                            <IconButton
                                size="large"
                                href="https://x.com/"
                                target="_blank"
                                sx={{ marginRight: "10px", color: "#002D72", "&:hover": { color: "#E81828" } }}>
                                <XIcon></XIcon>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box minWidth={"25%"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                        <Button
                            href="/auth/register"
                            sx={{ padding: "15px", width: "150px", backgroundColor: "#002D72", color: "white", "&:hover": { color: "#002D72", backgroundColor: "white" } }}
                        >Sign Up!</Button>
                    </Box>
                    <Box textAlign={"center"} display={{ xs: "flex", sm: "none" }} padding={"10px"} justifyContent={"center"} alignItems={"center"} height={"100%"} >
                        <Typography variant="p" color="#002D72"> Designed and Developed by Anthony Micco &copy; {year}</Typography>
                    </Box>
                </Box>
                <Box textAlign={"center"} display={{ xs: "none", sm: "flex" }} justifyContent={"center"} alignItems={"center"} >
                    <Typography variant="p" color="#002D72"> Designed and Developed by Anthony Micco &copy; {year}</Typography>
                </Box>
            </Container>
        </>
    )
}