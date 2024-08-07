import React from 'react'
import Image from 'next/image'
import { description } from '../Data'
import styles from './about.module.css'

const page = () => {
  return (
    <div className={styles.container}>

      <div>
        <Image className={styles.aboutUsimage} src="/truck.jpg" alt='Image' width={300} height={300}></Image>
      </div>

            <div  className={styles.description}>
              <h1 className={styles.heading}>{description.aboutHeading}</h1>
              <p className={styles.aboutParagraph}>{description.descriptionParagraph}</p>


              <h1 className={styles.featureHeading}>{description.featureHeading}</h1>
              <p className={styles.features}>{description.features}</p>

            </div>      

    </div>
  )
}

export default page
