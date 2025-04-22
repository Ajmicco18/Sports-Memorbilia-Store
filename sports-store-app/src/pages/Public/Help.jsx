import React from 'react'
import {
    Container,
    Box,
    Typography,
} from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Help() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "white" }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor: '#002D72',
        flexDirection: 'row-reverse',
        [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
            transform: 'rotate(90deg)',
        },
        [`& .${accordionSummaryClasses.content}`]: {
            marginLeft: theme.spacing(1),
        },
        ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(255, 255, 255, .05)',
        }),
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
            <Typography variant='h4' sx={{ textDecoration: "underline" }} color='#E81828' textAlign={"center"}>How Can We Help You?</Typography>
            <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} justifyContent={"center"} alignItems={"center"} justifySelf={"center"} width={"85%"} marginTop={2}>
                {/*Help Information Column 1 */}
                <Box width={{ xs: "100%", md: "45%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"}>

                    {/*Shipping and Handling Content */}
                    <Box width={"100%"} marginTop={2}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <LocationPinIcon sx={{ color: "white", marginRight: "10px" }} />
                                <Typography color="white" component="span">Shipping and Handling</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='p' color='#002D72'>
                                    At Fantopia Sports, we process and ship your order within 1–2 business days
                                    to make sure your new jerseys, trading cards, memorabilia, and apparel arrive
                                    in perfect condition. Standard ground shipping typically takes 3–5 business days,
                                    while expedited options are available at checkout if you need your gear even faster.
                                    All packages are carefully inspected, securely packaged, and include a tracking number
                                    so you can follow every step of the journey. If you have questions about international
                                    delivery, duties, or special requests, our customer care team is here to help—just reach
                                    out via our <a href='/contact-us' className='contactLink'>Contact Us</a> page!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    {/*Returns Content */}
                    <Box width={"100%"} marginTop={2}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <FastRewindIcon sx={{ color: "white", marginRight: "10px" }} />
                                <Typography color="white" component="span">Returns</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='p' color='#002D72'>
                                    At Fantopia Sports, your satisfaction is our priority. If you’re not
                                    completely happy with your purchase, you may return most unworn, unwashed
                                    items in their original packaging within 30 days of delivery for a full
                                    refund or exchange. To start a return, simply visit your account’s Order
                                    History or contact our support team for a prepaid return label. Once we
                                    receive and inspect your item, we’ll process your refund to the original
                                    payment method within 5–7 business days. Please note that custom or
                                    personalized gear and opened trading card packs are final sale and cannot be returned.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>

                {/*Help Information Column 2 */}
                <Box width={{ xs: "100%", md: "45%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"}>
                    {/*Payment Options Content */}
                    <Box width={"100%"} marginTop={2}>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <AttachMoneyIcon sx={{ color: "white", marginRight: "10px" }} />
                                <Typography color="white" component="span">Payment Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='p' color='#002D72'>
                                    Fantopia Sports makes checkout easy with a variety of secure payment options.
                                    We accept all major credit and debit cards (Visa, MasterCard, American Express,
                                    Discover), as well as PayPal, Apple Pay, and Google Pay for one‑tap convenience.
                                    If you prefer to split your purchase into interest‑free installments, you can
                                    choose Klarna or Afterpay at checkout. All transactions are protected by industry‑
                                    standard SSL encryption, and your payment details are never stored on our servers.
                                    If you have any questions or need assistance, our support team is here to help!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    {/*Product Details Content */}
                    <Box width={"100%"} marginTop={2}>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                <AssignmentIcon sx={{ color: "white", marginRight: "10px" }} />
                                <Typography color="white" component="span">Product Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='p' color='#002D72'>
                                    Each listing on Fantopia Sports comes with comprehensive product information to
                                    help you make the best choice. You’ll find high‑resolution images from multiple
                                    angles, official licensing and authenticity certifications, material and fabric
                                    breakdowns, and detailed size charts to ensure the perfect fit. We also include
                                    care instructions, SKU/model numbers, release dates, and customer ratings when available.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>

            {/*Additional Assistance Content */}
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} textAlign={"center"} marginTop={2}>
                <Typography variant='h5' fontWeight={"bold"} color='#E81828'>Need Further Assistance?</Typography>
                <Typography variant='p' color='#E81828'>Contact one of our customer support agents at (123)-456-HELP to receive assistance.</Typography>
            </Box>
        </Container>
    )
}
