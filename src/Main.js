import React, { useEffect, useState } from 'react'
import createStore from './utils/createStore'
import { getRegions } from './server'
import styles from './Main.module.scss'

export const useRegionsStore = createStore([])
const Main = () => {
    const [regions, setRegions] = useRegionsStore()
    useEffect(() => void getRegions().then(setRegions), [])

    return <main className={styles.main}></main>
}

export default Main
