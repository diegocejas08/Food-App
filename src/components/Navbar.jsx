import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Navbar-img/Logo.webp";
// import { IconName } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="sm">
            <nav className=" bg-yellow-100" >
                <div className="flex justify-between items-center h-48 relative shadown-sm ">
                    <img className="ml-4" src={Logo} alt="" />
                    <div>

                    </div>

                    <ul className=" md:flex hidden space-x-6">
                        <li className="transform motion-safe:hover:scale-110  font-serif font-bold text-4xl text-green-600">
                            <Link to={'/'}>Menú</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">
                            <Link to={'/About'}>Nosotros</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">
                            <Link to={'/Contact'}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
