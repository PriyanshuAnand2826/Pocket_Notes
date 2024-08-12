import React from 'react'
import styles from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className={styles.container}>
   <h2 className={styles.sub_text}>404 ! Page not found</h2>
   <p >The page you are looking for is not register by the app.</p>
   <Link className={styles.link} to='/'>GO TO HOMEPAGE</Link>
  </div>
  )
}

export default NotFoundPage