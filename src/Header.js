import React from 'react'
import styles from './Header.module.scss'
import logo from './assets/header-logo.png'
import useLocation from './utils/useLocation'

const Header = () => {
    const [location, goto] = useLocation()
    const pathname = location.pathname[location.pathname.length - 1] == '/' ? location.pathname : location.pathname + '/'

    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <img className={styles.logo} src={logo}></img>
            </div>
            <div className={styles.reports}>
                <span>Reports</span>
            </div>
            <div onClick={() => goto('/overal')} className={styles.overal} data-active={new RegExp('/overal', 'i').test(pathname)}>
                <span>Overal</span>
            </div>
            <div onClick={() => goto('/specific')} className={styles.specific} data-active={new RegExp('/specific', 'i').test(pathname)}>
                <span>Specific</span>
            </div>
        </header>
    )
}

export default Header
