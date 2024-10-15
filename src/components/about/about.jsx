import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
    const text = "I'm a Software Developer based in Kerala, India with over a year of experience specializing in Frontend Engineering, focusing on building high quality web experiences.";
    const words = text.split(' ');
    return (
        <Box sx={{ minHeight: '80vh', alignContent: "center" }} id="about">
            <Container maxWidth="md">
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        align="center"
                        gutterBottom
                        sx={{ color: 'grey.600', fontSize: { xs: '2.5rem', md: '4.2rem' }, marginBottom: 10, }}
                    >
                        About me
                    </Typography>
                </motion.div>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} textAlign={"center"}>
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75, delay: index * 0.1 }}
                                style={{ display: 'inline-block' }}
                                viewport={{ once: true }}

                            >
                                <Typography
                                    component="span"
                                    sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, margin: '0 4px' }}
                                >
                                    {word}
                                </Typography>
                            </motion.span>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
