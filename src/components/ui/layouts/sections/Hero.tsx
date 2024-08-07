import { Button } from "../../button";
import macbookExposed from "../../../../assets/macbook-exposed.png";
import { motion } from "framer-motion";

// animations
const intro = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.25,
            delayChildren: 1
        }
    }
};
const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            bounce: 0.5
        }
    }
};

const Hero = () => {
    return (
        <div className="custom-container grid grid-cols-1 lg:grid-cols-2 place-items-center py-20 pt-40 my-5">
            <motion.div
                variants={intro}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={introChildren}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-nowrap"
                >
                    <span className="text-gray">Don't worry,</span><br />
                    <span>We'll fix it.</span>
                </motion.h1>
                <motion.p
                    variants={introChildren}
                    className="text-dark-gray text-lg mb-5 mt-5 lg:mt-10"
                >Welcome to <span className="text-primary-foreground font-semibold">iRepair</span>, your one-stop place for all kinds of <span className="text-primary-foreground font-semibold">Macbook</span> repairs and diagnostics.</motion.p>
                <motion.div
                    variants={introChildren}
                >
                    <Button>Book a service</Button>
                </motion.div>
            </motion.div>
            <motion.div
                className="w-3/4 lg:w-full mx-auto"
                initial={{
                    y: 0,
                    rotate: 0,
                    scale: 5
                }}
                animate={{
                    y: 20,
                    rotate: -30,
                    scale: 1,
                    transition: {
                        duration: 1,
                        y: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }
                }}
            >
                <img src={macbookExposed} className="object-contain" alt="MacBook Exposed" />
            </motion.div>
        </div>
    );
};

export default Hero;
