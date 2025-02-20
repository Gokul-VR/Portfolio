import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Divider,
    Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import FloatingLaptop from '../../3d';
import List from '../customComponents/animatedList';
import { lazy } from 'react';
import { Suspense } from 'react';

const LazyFloatingLaptop = lazy(() => import('../../3d'));
const projects = [
    { id: 1, name: "CRM", description: "A customized Customer Relationship Management system tailored to the specific needs of Peter and Paul’s Hospitality and Entertainment Group" },
    { id: 2, name: "Nrolled Inc", description: " An admin console and user web application for Nrolled Inc." },
    { id: 3, name: "iSportz", description: "Admin panel for iSportz Inc. The Sports Tech Company" },
    { id: 4, name: "Portfolio", description: "Portfolio built using React JS, Three.js, Framer Motion, MUI" },
    { id: 5, name: "Locket", description: "An Admin console for Locket App." },
];

const ProjectSection = ({ darkMode }) => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const text = "Works";
    const letters = text.split('');
    return (
        <Box sx={{ py: 10 }} id="projects">
            <Container>
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h5" align="center" sx={{ color: 'grey.600', fontSize: { xs: '2.5rem', md: '4rem' }, marginBottom: 10, }}>
                        Works
                    </Typography>
                </motion.div>

                <Box sx={{ mt: 6 }}>
                    <Grid container spacing={7} alignItems="center" sx={{ overflow: "hidden" }}>
                        <Grid item xs={12} md={6} sx={{ marginTop: { xs: -2, md: 0 }, }} textAlign={"left"}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <motion.div
                                    initial={{ opacity: 0, x: -25 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <LazyFloatingLaptop />
                                </motion.div>
                            </Suspense>
                            {/* <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <FloatingLaptop />
                            </motion.div> */}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ marginBottom: { xs: 2, md: 0 } }}>
                            {projects.map((project, index) => (
                                <React.Fragment key={project.id}>
                                    <motion.div
                                        onHoverStart={() => setHoveredProject(project.id)}
                                        onHoverEnd={() => setHoveredProject(null)}
                                        initial={{ opacity: 0, x: 25 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.9, delay: 0.4 }}
                                    // viewport={{ once: true }}
                                    >
                                        <motion.div
                                            animate={{
                                                x: hoveredProject === project.id ? 10 : 0,
                                                transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 15 }
                                            }}
                                        >
                                            <ProjectItems projectName={project.name} description={project.description} />
                                            {/* <FlipLink projectName={project.name} isHovered={hoveredProject === project.id} />
                                            <span className='py-0.5' style={{ fontSize: '0.9rem' }}>
                                                {project.description}
                                            </span> */}
                                            {/* <List heading={project.name} subheading={project.description} /> */}
                                        </motion.div>
                                    </motion.div>
                                    {/* {index < projects.length - 1 && (
                                        <Divider sx={{ my: 4, bgcolor: darkMode ? 'white' : 'black' }} />
                                    )} */}
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

const DURATION = 0.30;
const STAGGER = 0.050;

const FlipLink = ({ projectName, isHovered }) => {
    return (
        <motion.div
            animate={isHovered ? "hovered" : "initial"}
            className="relative block overflow-hidden text-3xl sm:text-7xl md:text-8xl lg:text-3xl"
        >
            <div>
                {projectName.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className={`inline-block`}

                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {projectName.split("").map((l, i) => (
                    <motion.span

                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className={`inline-block ${isHovered ? 'italic' : ''}`}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};
const ProjectItems = ({ projectName, description }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
            <div>
                <p className="block overflow-hidden text-2xl sm:text-7xl md:text-8xl lg:text-3xl">{projectName}</p>
                <p className="text-sm text-zinc-500">{description}</p>
            </div>

        </motion.div>
    );
};
export default function Projects({ darkMode }) {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <ProjectSection darkMode={darkMode} />
        </Box>
    );
}
