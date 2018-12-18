import React from 'react'
import styles from './Region.module.scss'
import thread_svg from '../../../assets/thread.svg'
import download_svg from '../../../assets/download.svg'

// dynamically generate region name + region icon + download button (and indentation)
export default function Region(props) {
  // Title.js also uses Region as its components, however it does not have a type attribute and download button
  return (
    <span className={styles.container}>
      {props.type === 'D' && <img className={styles.DIndentation} alt='thread' src={thread_svg}></img>}
      {props.type === 'T' && <img className={styles.TIndentation} alt='thread' src={thread_svg}></img>}
      {props.type && <span className={styles.icon}>{props.type}</span>}
      <span className={styles.name}>{props.name}</span>
      {props.type && <div className={styles.download}> <img alt='download' src={download_svg}></img></div>}
    </span>
  )
}
