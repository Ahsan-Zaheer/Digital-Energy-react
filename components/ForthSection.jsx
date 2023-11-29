import React from 'react'
import styles from '../assets/home.module.css'
import service1 from '../assets/service1.svg'
import service2 from '../assets/service2.svg'
import service3 from '../assets/service3.svg'
import pseudo from '../assets/pseudo.svg'


const ForthSection = () => {
  return (
    <div className={`${styles.services} container`}>
        <div className='position-relative d-inline'>
        <h2 className={styles.services_title}>What we offer you</h2>
        <img src={pseudo} alt="" className={styles.service_pseudo}/>
        </div>
        <div className={`row ${styles.menu}`}>
            <div className={`col-lg-4 `}>
                <div className={styles.menu_item} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="400">
                <h2 className={styles.menu_title}>High end creative services on demand</h2>
                <img src={service1} alt="" className={styles.services_img} />           
                </div>
            </div>
            <div className={`col-lg-4 my-4 my-sm-0 `}>
            <div className={styles.menu_item} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="800">
                <h2 className={styles.menu_title}>Total digital presence management</h2>
                <img src={service2} alt="" className={styles.services_img} />
            </div>
            </div>
            <div className={`col-lg-4 `}>
            <div className={styles.menu_item} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="1000">
                <h2 className={styles.menu_title}>All saving you time and hassles</h2>
                <img src={service3} alt="" className={styles.services_img} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ForthSection