import React from "react";
import Logo from "../Navbar-img/Logo.webp";
// import styles from "../index.css";

const Navbar = () => {
    return (
        <>
            <nav className=" bg-yellow-100" >
                <div className="flex justify-between items-center h-48 relative shadown-sm">
                    <img className="ml-4" src={Logo} alt="" />
                    <ul className=" flex space-x-5">
                        <li className="transform motion-safe:hover:scale-110  font-serif font-bold text-4xl text-green-600">Menú</li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">Nosotros</li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">Club Veggie</li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">Contactanos</li>
                    </ul>
                </div>
            </nav>
        </>

    );
};

export default Navbar;
