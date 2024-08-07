import React from 'react'
import { footerData } from '../Data'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.containerWrapper}>
                <h1 className={styles.footerHeading}>{footerData.heading}</h1>
                <button className=' hover:bg-green-600 hover:text-white bg-amber-300 my-4 rounded-md text-black font-bold px-6 py-[3px]'>Try for Free</button>
                <p>{footerData.address}</p>
                <p>{footerData.state}</p>

            </div>

            <div className={styles.containerWrapper}>
                <h1 className={styles.footerHeading}>{footerData.connect}</h1>
                <p>{footerData.contact}</p>
                <a className={styles.email}  href={`mailto:${footerData.email}`}> {footerData.email}</a>


            </div>

        </div>
    )
}
export default Footer
