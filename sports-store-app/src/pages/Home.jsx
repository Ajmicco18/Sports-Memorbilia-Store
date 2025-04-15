import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>This is the Home Page!</h1>
            <Box sx={{ height: "100vh" }}>
                <Typography fontSize={"100px"}>This is a large box</Typography>
            </Box>
        </div>
    )
}
