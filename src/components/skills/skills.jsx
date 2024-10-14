import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaFigma, FaHtml5, FaCss3, FaNpm } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import { Box, Container, Grid, Typography } from '@mui/material';
import { SiMui, SiAdobephotoshop, SiFramer, SiTailwindcss } from "react-icons/si";

const skills = [
    { id: 1, name: 'Html', icon: <FaHtml5 size={50} /> },
    { id: 2, name: 'Css', icon: <FaCss3 size={50} /> },
    { id: 3, name: 'React', icon: <FaReact size={50} /> },
    { id: 4, name: 'JavaScript', icon: <DiJavascript1 size={50} /> },
    { id: 5, name: 'Tailwind', icon: <SiTailwindcss size={50} /> },
    { id: 6, name: 'Framer Motion', icon: <SiFramer size={50} /> },
    { id: 7, name: 'Redux', icon: <SiRedux size={50} /> },
    { id: 8, name: 'Figma', icon: <FaFigma size={50} /> },
    { id: 9, name: 'MUI', icon: <SiMui size={50} /> },
    { id: 10, name: 'npm', icon: <FaNpm size={50} /> },
    { id: 11, name: 'Photoshop', icon: <SiAdobephotoshop size={50} /> },
];

const SkillSection = () => {
    return (
        <Box sx={{ py: 10 }} id="skills">
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h5" align="center" sx={{ color: 'grey.600', fontSize: { xs: '2.5rem', md: '4rem' }, marginBottom: 10 }}>
                        Tech Stacks
                    </Typography>
                </motion.div>

                <Grid container spacing={7} alignItems="center" sx={{ overflow: "hidden" }}>
                    <Grid item xs={12} md={12} sx={{ marginTop: { xs: -2, md: 0 } }} textAlign={"center"}>
                        <motion.div className="inline-block mt-2">
                            {skills.map((skill, index) => (
                                <SkillIcon key={skill.id} skill={skill} index={index} />
                            ))}
                        </motion.div>
                    </Grid>
                </Grid>
        </Box>
    );
};

const SkillIcon = ({ skill, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative inline-block mx-3 text-center p-5 md:p-3.5 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: index * 0.1 }}
                className="flex justify-center max-sm:m-3"
            >
                {skill.icon}
            </motion.div>

            {hovered && (
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    {skill.name}
                </motion.div>
            )}
        </div>
    );
};

export default SkillSection;
