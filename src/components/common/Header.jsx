import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    <Link to="/" className={styles.logo}>
                        <h1>☕ Brew Haven</h1>
                    </Link>
                    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}> 
                        <Navigation onLinkClick={handleLinkClick} />
                    </nav>
                    <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header