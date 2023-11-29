import React from 'react'
import pseudo from '../assets/pseudo.svg'
import robo4 from '../assets/robo4.svg'
import logo_light from '../assets/logo_light.svg'
import twitter from '../assets/twitter.svg'
import fb from '../assets/fb.svg'
import medium from '../assets/medium.svg'
import github from '../assets/github.svg'
import one from '../assets/10.svg'
import two from '../assets/8.svg'
import three from '../assets/3.svg'
import four from '../assets/4.svg'
import five from '../assets/5.svg'
import six from '../assets/6.svg'
import seven from '../assets/9.svg'
import styles from '../assets/home.module.css'


export default function Contact() {
  return (
    <div className={`row contact-sec`}>
        <div className="col-lg-4 contact-first">
                <div className={styles.layers}>
                    <img src={seven} alt="" className={`${styles.shapes} ${styles.shape_rotate2}`}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="2000" />
                <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1800" />
                </div>
                <div className={styles.layers}>
                    <img src={five} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="1550" />
                <img src={three} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1300" />
                <img src={four} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1200" />
                </div>
        <div className={styles.layers}>
            <img src={two} alt=""  className={styles.shapes}  data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="800" data-aos-delay="1000" />
                <img src={one} alt=""  className={`${styles.shapes} ${styles.shape_rotate}`}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="500" />
                </div>
        </div>
        <div className="col-lg-3 contact-right">
            <img src={robo4} alt="" className='contact-robo' />
        </div>
        <div className="col-lg-5 contact-left">
            <h2 className='contact-title'>
            Ready to electrify your digital presence? Let's connect
            <img src={pseudo} alt="" className='contact-pseudo' />
            </h2>
            <form action="/" method="post"  className='contact-form'>
            <input type="text" name="name" id="name" placeholder='Your Name*' className='contact-items'/>
            <input type="email" name="email" id="email" placeholder='Your Email*' className='contact-items'/>
            <textarea name="message" id="message" placeholder='Your Message*' className='message'></textarea>
            <button className='btn-last mt-3'>Send Message</button>
            </form>
        </div>

        <div className="contact-sec2">
            <div className="row footer">
                <div className="col-lg-4 footer-items">
                 <img src={logo_light} alt="" className={`me-3 logo-light`} />
                </div>
                <div className="col-lg-4 footer-items">
                   <span className="me-3">2022. All Rights Reserved</span> Terms & Condition <span className='ms-3'>Privacy</span> 
                </div>
                <div className="col-lg-4 footer-items">
                        <img src={twitter} alt="" className="footer-icons" />
                        <img src={fb} alt="" className="footer-icons" />
                        <img src={medium} alt="" className="footer-icons" />
                        <img src={github} alt="" className="footer-icons" />
                </div>
            </div>
        </div>
    </div>
  )
}
