import React from 'react'
import styles from './description.module.css'
import { description } from '../Data'

const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
        <h1 className={styles.descriptionHeading} >{description.descriptionHeading}</h1>
        <p className={styles.descriptionParagraph}>{description.descriptionParagraph}</p>
    </div>
  )
}

export default Description