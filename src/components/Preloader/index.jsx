import './style.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
        console.log("Dimensions set:", dimension);
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
            console.log("Current index:", index + 1);
        }, index === 0 ? 1000 : 150);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;


    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="introduction">
            {dimension.width > 0 &&
                <>
                    <motion.p initial={{ opacity: 0, }}
                        animate={{
                            opacity: 0.75,
                            transition: { duration: 1, delay: 0.2 }
                        }}>
                        <span></span>{words[index]}
                    </motion.p>
                    <svg>
                        <motion.path initial={{
                            d: initialPath,
                            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
                        }}
                            animate={{
                                d: targetPath,
                                transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
                            }} />
                    </svg>
                </>
            }
        </motion.div>
    );
}

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {

    },
};

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
};
