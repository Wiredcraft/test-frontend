import React from 'react'
import styles from './Main.module.scss'
import RegionsTable from './RegionsTable'

const Main = () => (
    <main className={styles.main}>
        <RegionsTable></RegionsTable>
    </main>
)

export default Main
