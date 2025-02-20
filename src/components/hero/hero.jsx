import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import { SplitText } from "../customComponents/SplitText";
import Typewriter from "typewriter-effect";
import "./hero.css";
import { VelocityText } from "./text";
import myImage from "../../assets/15032.jpg";
import Lanyard from "../Lanyard/Lanyard";
import CircularText from "../customComponents/circularText";
export default function Hero() {
  //   const [cameraDistance, setCameraDistance] = useState(24);
  //   const [stopGravity, setStopGravity] = useState(false);

  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    // <Box
    //   ref={heroRef}
    //   sx={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Grid
    //       container
    //       spacing={4}
    //       alignItems="center"
    //       //   sx={{ marginTop: { xs: -10, md: 0 } }}
    //     >
    //       <Grid
    //         item
    //         xs={12}
    //         md={5}
    //         sx={{
    //           //  marginBottom: { xs: 8, md: 0 },
    //           textAlign: { xs: "center", md: "left" },
    //         }}
    //       >
    //         <motion.div
    //           initial={{ opacity: 0, x: -20 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}
    //             whileTap={{ rotateY: 0, rotateX: 0, scale: 0.95 }}
    //             transition={{
    //               type: "spring",
    //               stiffness: 300,
    //               damping: 20,
    //               duration: 0.8,
    //             }}
    //           >
    //             <Typography
    //               sx={{ marginTop: 5, fontSize: { xs: "2.6rem", md: "4rem" } }}
    //             >
    //               <SplitText text="Hello" delay={60} />
    //             </Typography>
    //           </motion.div>
    //           <Typography sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}>
    //             I'm Gokul,
    //           </Typography>
    //           <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
    //             a Software{" "}
    //             <span style={{ display: "inline-block" }}>
    //               <Typewriter
    //                 options={{
    //                   strings: [" Developer", " Engineer"],
    //                   autoStart: true,
    //                   loop: true,
    //                 }}
    //               />
    //             </span>
    //           </Typography>
    //         </motion.div>
    //       </Grid>
    //       <Grid
    //         item
    //         xs={12}
    //         md={7}
    //         sx={{
    //           display: "flex",
    //           justifyContent: "center",
    //           position: "relative",
    //           overflow: "visible",
    //           zIndex: 10,
    //         }}
    //       >
    //         <div
    //           className="home__img"
    //           style={{
    //             backgroundImage: `url(${myImage})`,
    //           }}
    //         ></div>
    //         {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
    // <Box
    //   sx={{
    //     position: "relative",
    //     width: "100%",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     padding: { xs: 2, md: 5 },
    //     overflow: "hidden",
    //     mt: { xs: -10, md: 0 },
    //   }}
    // >
    //   <Box sx={{ width: "100%" }}>
    //     <motion.div
    //       initial={{ opacity: 0, x: -20 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //       style={{
    //         zIndex: 2,
    //         maxWidth: "40%",
    //         marginLeft: 120,
    //       }}
    //     >
    //       <Typography sx={{ fontSize: { xs: "2.6rem", md: "3rem" } }}>
    //         <SplitText text="Hello" delay={60} />
    //       </Typography>
    //       <Typography sx={{ fontSize: { xs: "1.7rem", md: "2rem" } }}>
    //         I'm Gokul,
    //       </Typography>
    //       <Typography sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}>
    //         a Software{" "}
    //         <span style={{ display: "inline-block" }}>
    //           <Typewriter
    //             options={{
    //               strings: [" Developer", " Engineer"],
    //               autoStart: true,
    //               loop: true,
    //             }}
    //           />
    //         </span>
    //       </Typography>
    //     </motion.div>
    //   </Box>
    //   <Box sx={{}}>
    //     <CircularText
    //       text=" WEB DEVELOPER * REACT JS * CREATIVE * "
    //       onHover="speedUp"
    //       spinDuration={10}
    //       className="custom-class"
    //     />
    //   </Box>
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%",
    //       zIndex: 5,
    //       pointerEvents: "none", // Ensures it doesn't block dragging
    //     }}
    //   >
    //     <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    //   </Box>
    // </Box>

    // <Box
    //   ref={heroRef}
    //   sx={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     position: "relative",
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Grid container spacing={4} alignItems="center">
    //       <Grid
    //         item
    //         xs={12}
    //         md={5}
    //         sx={{
    //           textAlign: { xs: "center", md: "left" },
    //         }}
    //       >
    //         <motion.div
    //           initial={{ opacity: 0, x: -20 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}
    //             whileTap={{ rotateY: 0, rotateX: 0, scale: 0.95 }}
    //             transition={{
    //               type: "spring",
    //               stiffness: 300,
    //               damping: 20,
    //               duration: 0.8,
    //             }}
    //           >
    //             <Typography
    //               sx={{ marginTop: 5, fontSize: { xs: "2.6rem", md: "4rem" } }}
    //             >
    //               <SplitText text="Hello" delay={60} />
    //             </Typography>
    //           </motion.div>
    //           <Typography sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}>
    //             I'm Gokul,
    //           </Typography>
    //           <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
    //             a Software{" "}
    //             <span style={{ display: "inline-block" }}>
    //               <Typewriter
    //                 options={{
    //                   strings: [" Developer", " Engineer"],
    //                   autoStart: true,
    //                   loop: true,
    //                 }}
    //               />
    //             </span>
    //           </Typography>
    //         </motion.div>
    //       </Grid>
    //       <Grid item xs={12} md={7} />
    //     </Grid>
    //   </Container>

    //   {/* Lanyard over the whole section */}
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       pointerEvents: "auto", // Enables dragging
    //       zIndex: 5, // Above the text
    //     }}
    //   >
    //     <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    //   </Box>
    // </Box>

    // <div className="min-h-screen">
    //   <div className="container mx-auto px-4 py-12">
    //     <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
    //       <div className="w-full lg:w-1/2">
    //         <motion.div
    //           initial={{ opacity: 0, x: -20 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}
    //             whileTap={{ rotateY: 0, rotateX: 0, scale: 0.95 }}
    //             transition={{
    //               type: "spring",
    //               stiffness: 300,
    //               damping: 20,
    //               duration: 0.8,
    //             }}
    //           >
    //             <Typography
    //               sx={{ marginTop: 5, fontSize: { xs: "2.6rem", md: "4rem" } }}
    //             >
    //               <SplitText text="Hello" delay={60} />
    //             </Typography>
    //           </motion.div>
    //           <Typography sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}>
    //             I'm Gokul,
    //           </Typography>
    //           <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
    //             a Software{" "}
    //             <span style={{ display: "inline-block" }}>
    //               <Typewriter
    //                 options={{
    //                   strings: [" Developer", " Engineer"],
    //                   autoStart: true,
    //                   loop: true,
    //                 }}
    //               />
    //             </span>
    //           </Typography>
    //         </motion.div>
    //       </div>

    //       {/* Right side - 3D Card */}
    //       <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px]">
    //         <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //tailwind partly working
    // <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-16">
    //   <motion.div
    //     className="w-full flex flex-col items-start justify-end p-11"
    //     initial={{ opacity: 0, x: -20 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}
    //       whileTap={{ rotateY: 0, rotateX: 0, scale: 0.95 }}
    //       transition={{
    //         type: "spring",
    //         stiffness: 300,
    //         damping: 20,
    //         duration: 0.8,
    //       }}
    //     >
    //       <Typography
    //         sx={{ marginTop: 5, fontSize: { xs: "2.6rem", md: "4rem" } }}
    //       >
    //         <SplitText text="Hello" delay={60} />
    //       </Typography>
    //     </motion.div>
    //     <Typography sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}>
    //       I'm Gokul,
    //     </Typography>
    //     <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
    //       a Software{" "}
    //       <span style={{ display: "inline-block" }}>
    //         <Typewriter
    //           options={{
    //             strings: [" Developer", " Engineer"],
    //             autoStart: true,
    //             loop: true,
    //           }}
    //         />
    //       </span>
    //     </Typography>
    //   </motion.div>

    //   <div className="w-full flex items-center justify-center md:mt-0">
    //     <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    //   </div>
    // </div>

    // <div className="w-full h-screen flex relative">
    //   {/* Left Column (4/12) */}
    //   <div className="w-4/12 flex items-center justify-center p-12 ml-11">
    //     <motion.div
    //       className="w-full flex flex-col items-start justify-center"
    //       initial={{ opacity: 0, x: -20 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //     >
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}
    //         whileTap={{ rotateY: 0, rotateX: 0, scale: 0.95 }}
    //         transition={{
    //           type: "spring",
    //           stiffness: 300,
    //           damping: 20,
    //           duration: 0.8,
    //         }}
    //       >
    //         <Typography
    //           sx={{ marginTop: 5, fontSize: { xs: "2.6rem", md: "4rem" } }}
    //         >
    //           <SplitText text="Hello" delay={60} />
    //         </Typography>
    //       </motion.div>
    //       <Typography sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}>
    //         I'm Gokul,
    //       </Typography>
    //       <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
    //         a Software{" "}
    //         <span style={{ display: "inline-block" }}>
    //           <Typewriter
    //             options={{
    //               strings: [" Developer", " Engineer"],
    //               autoStart: true,
    //               loop: true,
    //             }}
    //           />
    //         </span>
    //       </Typography>
    //     </motion.div>
    //   </div>

    //   {/* Right Column (8/12) */}
    //   <div className="w-full absolute z-20">
    //     <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    //   </div>
    // </div>

    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mt-[-210px] md:mt-0">
          <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
            <Lanyard />
          </div>
          <div className="text-center md:text-left mt-[-160px] md:mt-0">
            {/* <div className="text-center md:text-left"> */}

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
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.8,
                }}
              >
                <Typography
                  sx={{ marginTop: 5, fontSize: { xs: "2.6rem", md: "3rem" } }}
                >
                  <SplitText text="Hello" delay={60} />
                </Typography>
              </motion.div>
              <Typography sx={{ fontSize: { xs: "1.7rem", md: "2rem" } }}>
                I'm Gokul,
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}>
                a Software{" "}
                <span style={{ display: "inline-block" }}>
                  <Typewriter
                    options={{
                      strings: [" Developer", " Engineer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
