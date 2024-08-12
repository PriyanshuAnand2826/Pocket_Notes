import React from 'react'
import styles from './EmptyNote.module.css'
import pocketImg from '../assets/home_pocket_notes.png'
import lock from '../assets/lock.png'

function EmptyNote() {
  return (
    <div className={styles.container}>
      <img  className={styles.avatar} src={pocketImg} alt="" />
      <p className={styles.title}>Pocket Notes</p>
      <p className={styles.sub_text}>Send and receive messages without keeping your phone online.
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      <div className={styles.encryption}>
        <img src={lock} alt="" />
        <p className={styles.encryption_text}>end-to-end encrypted</p>
      </div>
    </div>
  )
}

export default EmptyNote