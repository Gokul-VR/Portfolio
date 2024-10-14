import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Grid } from '@mui/material';

const experienceData = [
    {
        year: '2022 - Present',
        company: 'Company A',
        description: 'Description of your role and achievements at Company A.',
    },
    {
        year: '2020 - 2022',
        company: 'Company B',
        description: 'Description of your role and achievements at Company B.',
    },
    // Add more experience items as needed
];

const Experience = () => {
    return (
        // <div className="container mx-auto py-10 " >
        //     <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
        //     <div className="flex flex-col items-center">

        //     </div>
        // </div>
        <Box sx={{ minHeight: '80vh', alignContent: "center" }} id="about">
            <Container maxWidth="md">
                <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
                <Grid container spacing={4} mt={6}>
                    <Grid item xs={12} md={12} textAlign={"center"}>
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-between items-center mb-14 w-full max-w-4xl"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, delay: index * 0.3 }} // Adding delay based on index
                                viewport={{ once: false }}
                            >
                                <motion.div
                                    className="text-lg font-semibold"
                                    initial={{ x: -100 }}
                                    whileInView={{ x: 0 }}
                                    exit={{ x: -100 }}
                                    transition={{ duration: 1.5, delay: index * 0.2 }} // Adding delay
                                >
                                    {item.year}
                                </motion.div>
                                <motion.div
                                    className="flex-1 ml-4 text-lg font-bold"
                                    initial={{ x: 700 }}
                                    whileInView={{ x: 0 }}
                                    exit={{ x: 100 }}
                                    transition={{ duration: 1.3, delay: index * 0.2 }} // Adding delay
                                >
                                    <div >{item.company}</div>
                                    <div className="text-gray-600">{item.description}</div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;
