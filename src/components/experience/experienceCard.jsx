import React from 'react'
import { Card, CardContent, Typography, Box, IconButton, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


const MotionBox = motion(Box)

export default function ExperienceCard({ title, company }) {
    return (
        <Card sx={{ height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>

                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {company}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'black'

                    }}
                >
                    <Typography
                        variant="body2"
                        color="primary"
                        sx={{ mr: 1, color: 'black' }} // Change color on hover
                    >
                        View More
                    </Typography>
                    <MotionBox
                        component="span"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                    >
                        <ArrowForwardIcon fontSize="small" color="inherit" style={{ marginTop: 7 }} />
                    </MotionBox>
                </Box>
            </CardContent>
        </Card>
    )
}
