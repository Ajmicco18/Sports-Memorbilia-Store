import React from 'react'
import { Container, Box, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SmartphoneIcon from '@mui/icons-material/Smartphone';


export default function ContactUs() {
    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: 2 }}>
                <Typography variant='h4' sx={{ textDecoration: "underline" }} color='#E81828' textAlign={"center"}>Contact Us</Typography>
                <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"85%"} justifySelf={"center"} alignItems={"center"} justifyContent={"center"} marginTop={2}>

                    {/*Call Contact Info */}
                    <Box width={{ xs: "100%", sm: "33%" }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} marginBottom={2}>
                        <PhoneIcon sx={{ width: "40px", height: "40px", color: "#002D72", marginBottom: 1 }} />
                        <Typography variant='h5' textAlign={"center"} color='#002D72' marginBottom={1} fontWeight={"bold"}>Call</Typography>
                        <Typography variant='p' textAlign={"center"} color='#E81828'>Call our representatives at (123)-456-7890</Typography>
                    </Box>

                    {/*Text Contact Info */}
                    <Box width={{ xs: "100%", sm: "33%" }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} marginBottom={2}>
                        <SmartphoneIcon sx={{ width: "40px", height: "40px", color: "#002D72", marginBottom: 1 }} />
                        <Typography variant='h5' textAlign={"center"} color='#002D72' marginBottom={1} fontWeight={"bold"}>Text</Typography>
                        <Typography variant='p' textAlign={"center"} color='#E81828'>Text INFO to 81010 to receive text alerts about sales, new arrivals, etc.</Typography>
                    </Box>

                    {/*Email Contact Info */}
                    <Box width={{ xs: "100%", sm: "33%" }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} marginBottom={2}>
                        <EmailIcon sx={{ width: "40px", height: "40px", color: "#002D72", marginBottom: 1 }} />
                        <Typography variant='h5' textAlign={"center"} color='#002D72' marginBottom={1} fontWeight={"bold"}>Email</Typography>
                        <Typography variant='p' textAlign={"center"} color='#E81828'>Email sportsmem@store.com to receive emails about sales, new arrivals,etc.</Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
