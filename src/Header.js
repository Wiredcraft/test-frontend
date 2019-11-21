import React from 'react'
import styles from './Header.module.scss'
import logo from './assets/header-logo.png'

const Header = () => (
    <header className={styles.header}>
        <div className={styles['logo-container']}>
            <img className={styles.logo} src={logo}></img>
        </div>
        <div className={styles.reports}>
            <span>Reports</span>
        </div>
        <div className={styles.overal}>
            <span>Overal</span>
        </div>
        <div className={styles.specific}>
            <span>Specific</span>
        </div>
    </header>
)

export default Header
