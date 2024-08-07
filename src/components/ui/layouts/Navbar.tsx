import { NavLink } from 'react-router-dom';
import { Button } from '../button';

const Navbar = () => {
    return (
        <header className="h-16 w-full">
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
        </header>
    );
};

export default Navbar;
