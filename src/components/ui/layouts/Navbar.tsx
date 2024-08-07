import { NavLink } from 'react-router-dom';
import { Button } from '../button';
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-16 w-full fixed bg-white z-50"
        >
            <nav className="custom-container h-full flex justify-between items-center">
                <span className="text-3xl">iRepair</span>
                <ul className="space-x-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <Button>
                        <NavLink to="/login">Login</NavLink>
                    </Button>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Navbar;
