import React from "react";
import Logo from "../Assets/Logo.webp";
import styles from "../styles.module.css";

const Navbar = () => {
    return (
        <nav className={styles.lista}>
            <div className={styles.nav}>
                <img className={styles.logo} src={Logo} alt="" />
                <ul>
                    <li>Menú</li>
                    <li>Eventos</li>
                    <li>Home</li>
                    <li>Club Veggie</li>
                    <li>Franquicia</li>
                    <li>Contactanos</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
