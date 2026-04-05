// Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}> 
            <div className={styles.contactInfo}>Contact us at info@example.com</div>
            <div className={styles.socialLinks}>
                <a href='#'>Facebook</a>
                <a href='#'>Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;