import React from 'react'
import styles from './Message.module.css'
import { RxDotFilled } from "react-icons/rx";

function Message({content}) {
  return (
    <div className={styles.container}>
      <p className={styles.content}> {content.user_content}
      </p>

      <div className={styles.data_info}>
        <p style={{marginTop:"20px"}}>{content.date}</p>
        <RxDotFilled style={{marginTop:"20px"}} size={12} />
        <p   style={{marginTop:"20px"}}> {content.time}</p>
      </div>
    </div>
  )
}

export default Message