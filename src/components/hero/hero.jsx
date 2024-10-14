import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { SplitText } from '../customComponents/SplitText';
import Typewriter from 'typewriter-effect';
import "./hero.css";
import { VelocityText } from './text';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box
            ref={heroRef}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: { xs: '-40px', md: '34px' },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} sx={{ marginBottom: { xs: 8, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}
                                whileTap={{ rotateY: 0, rotateX: 0, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.8 }}
                            >
                                <Typography sx={{ marginTop: 5, fontSize: { xs: '2.8rem', md: '4rem' } }}>
                                    <SplitText text="Hello" delay={60} />
                                </Typography>
                            </motion.div>
                            <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                                I'm Gokul,
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                                a Software <span style={{ display: 'inline-block' }}>
                                    <Typewriter
                                        options={{
                                            strings: [' Developer', ' Engineer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="home__img"></div>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}
