"use client"
import React from 'react'
import { contactData } from '../Data'
import styles from './contact.module.css'
import { useRef } from 'react'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input placeholder='Name' name='name' type='text' required className={styles.formInput}></input>
        <input placeholder='Your email' name='email' type='email' required className={styles.formInput} ></input>
        <input placeholder='Subject' name='subject' type='text' required className={styles.formInput}></input>
        <textarea placeholder='Your message' name='message' required className={styles.formInput}></textarea>
        <button type='submit' className={styles.submitButton}>Submit</button>
      </div>
      <div className={styles.contactDescription}>

        <h1 className={styles.aboutAddressheading}>{contactData.contactHeading}</h1>
        <p className={styles.description}>{contactData.contactParagraph}</p>

      </div>
    </div>
  )
}

export default page