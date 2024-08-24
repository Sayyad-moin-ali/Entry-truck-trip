import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'

const Hero = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.mainHeading}>
                    <h1 className={styles.animatebounce}>Track your Trip Record</h1>
                    <button className={styles.signupButton}>signUp</button>
                </div>
                <div className={styles.imageContainer}>
                    <Image src='/mainimg.png' alt='mainimage' width={500} height={300} />
                </div>
            </div>
            <div className={styles.lineContainer}></div>

            <div className={styles.secondContainer}>
                <div className={styles.paragraphContainer}>
                    <h1 className={styles.paragraphContainerHeading}>Entry your trips and Track your Truck Records</h1>
                    <p>With the help of our website you can easily maintain your records of truck trips this is only for truck owners so that they can manage easily. and instead of writing their records on notebook or paper they can direct entry on our website</p>
                </div>
                {/* <Image src='/locationfromto.jpg' alt="location image" width={300} height={300} /> */}
                <video className={styles.videoWrapper} src='/video.mp4' width={350} height={350} autoPlay loop muted></video>
            </div>
            {/* <div className={styles.lineContainer}></div> */}
       
        </div>

    )
}

export default Hero