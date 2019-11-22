import React, { useState, useEffect } from 'react'
import styles from './Select.module.scss'
import arrow from './assets/arrow-drop-down.png'

export const Select = ({ onSelect, placeholder, options, ...props }) => {
    const [active, setState] = useState(false)
    const [selected, select] = useState(undefined)
    const h = option => {
        const { text, value } = option
        select(text)
        setState(false)
        onSelect(value)
    }
    // useEffect(() => {
    //     const h = () => setState(false)
    //     document.addEventListener('click', h)
    //     return () => document.removeEventListener('click', h)
    // }, [])

    return (
        <div className={styles.select}>
            <div
                className={styles.placeholder}
                onClickCapture={evt => {
                    evt.stopPropagation()
                    setState(!active)
                }}
            >
                <span>{selected || placeholder}</span>
                <div className={styles.arrow}>
                    <img src={arrow}></img>
                </div>
            </div>
            <ul data-active={active} className={styles.options}>
                {options.map(option => (
                    <li onClick={() => h(option)} key={option.value}>
                        {option.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select
