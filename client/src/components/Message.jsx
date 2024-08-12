import React from 'react'
import styles from './Message.module.css'
import { RxDotFilled } from "react-icons/rx";

function Message({content}) {
  return (
    <div className={styles.container}>
      <p className={styles.content}> {content.user_content}
      </p>

      <div className={styles.data_info}>
        <p>{content.date}</p>
        <RxDotFilled size={20} />
        <p>{content.time}</p>
      </div>
    </div>
  )
}

export default Message