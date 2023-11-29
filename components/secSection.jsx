import React, { useState, useEffect } from 'react'
import styles from '../assets/home.module.css'
import pseudo from '../assets/pseudo.svg'
import robo2 from '../assets/robo2.svg'
import s1 from '../assets/s1.svg'
import s2 from '../assets/s2.svg'
import s3 from '../assets/s3.svg'
import s4 from '../assets/s4.svg'
import s5 from '../assets/s5.svg'
import bulb from '../assets/bulb.svg'
import brain from '../assets/brain.svg'
import PaperPlane from '../assets/PaperPlan.svg'


const secSection = () => {
  
  return (
    <div className={`${styles.sec_section}`}>
        <div className={`container ${styles.innerSec}`}>
            <div className={styles.inner2}>
            <h1 className={styles.sec2title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" >We Empower Ideas</h1>
            <img src={pseudo} alt="" className={styles.pseudo} />
            </div>
            <div className={`row m-0 p-0 ${styles.innerSec2}`}>
                  <div className={`col-lg-4 m-0 p-0 ${styles.sec1}`}>
                      <img src={s1} alt="" className={styles.s1} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" />
                  </div>
                  <div className={`col-lg-6 m-0 p-0 ${styles.sec2}`}>
                        <div className="row m-0 p-0">
                          <div className={`col-lg-6 m-0 p-0 ${styles.robot}`}>
                          <img src={robo2} alt="" className={styles.robo2}/>
                          </div>
                          <div className="col-lg-6 m-0 p-0">
                            <div className={styles.box}>
                                <img src={bulb} alt="" className={styles.ico} />
                                <h4 className={styles.box_title}>Design Solutions</h4>
                                <div className={styles.box_info}>Lorem ipsum dolor sit amet, consectetur <br /> 
                                adipiscing elit, sed do eiusmod tempor <br />
                                incididunt ut labore.</div>
                            </div>
                          </div>
                          <div className="col-lg-6 m-0 p-0">
                          <div className={styles.box}>
                                <img src={PaperPlane} alt="" className={styles.plan} />
                                <h4 className={styles.box_title}>Future Concept</h4>
                                <div className={styles.box_info}>Lorem ipsum dolor sit amet, consectetur <br /> 
                                adipiscing elit, sed do eiusmod tempor <br />
                                incididunt ut labore.</div>
                            </div>
                          </div>
                          <div className="col-lg-6 m-0 p-0">
                          <div className={styles.box2}>
                                <img src={brain} alt="" className={styles.ico} />
                                <h4 className={styles.box_title}>Big Ideas</h4>
                                <div className={styles.box_info}>Lorem ipsum dolor sit amet, consectetur <br /> 
                                adipiscing elit, sed do eiusmod tempor <br />
                                incididunt ut labore.</div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className={`col-lg-2 m-0 p-0 ${styles.sec3}`}>
                    <div className={styles.right_side}>
                      <div className={styles.circle1}>
                      <img src={s2} alt="" className={styles.s2} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="300" />
                      <img src={s3} alt="" className={styles.s3} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="600" />
                      </div>
                      <div className={styles.timer}>
                      <img src={s4} alt="" className={styles.s4} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="400" />
                      <img src={s5} alt="" className={styles.s5} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="500" />
                      </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default secSection;