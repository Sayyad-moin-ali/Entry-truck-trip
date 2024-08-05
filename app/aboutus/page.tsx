import React from 'react'
import Image from 'next/image'
import { aboutHeading } from '../Data'
import styles from './about.module.css'

const page = () => {
  return (
    <div className={styles.container}>

      <div>
        <Image className={styles.aboutUsimage} src="/truck.jpg" alt='Image' width={300} height={300}></Image>
      </div>

      {
        aboutHeading?.map((item, index) => {
          return (
            <div key={index} className={styles.description}>
              <h1 className={styles.heading}>{item.aboutHeading}</h1>
              <p className={styles.aboutParagraph}>{item.aboutParagraph}</p>
              <p className={styles.aboutParagraph}>{item.aboutProducts}</p>
              <h1 className={styles.aboutAddressheading}>{item.aboutAddressheading
              }</h1>
              <p className={styles.aboutParagraph}>{item.aboutAddress}</p>

            </div>
          )
        })
      }

    </div>
  )
}

export default page
