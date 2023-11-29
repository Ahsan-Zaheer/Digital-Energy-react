import Navbar from "./Navbar";
import styles from '../assets/home.module.css'
import robo from '../assets/robo.svg'
import arrow from '../assets/arrow.svg'
import one from '../assets/1.svg'
import two from '../assets/2.svg'
import three from '../assets/3.svg'
import four from '../assets/4.svg'
import five from '../assets/5.svg'
import six from '../assets/6.svg'
import seven from '../assets/7.svg'
import shadow from '../assets/shadow.svg'
import shapes from '../assets/shapes_mobile.svg'



export default function HeroSection(props) {
    return(
        <>
            <Navbar logo={props.logo}/>
            <div className={`container ${styles.inner_hero_sec}`}>
                    <div className='row mt-5 mt-md-0'>
                    <div className={`col-7 col-md-5 ${styles.hero_left}`}>
                    <div>
                    <h1 className={styles.title} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" >Your Idea</h1> <h1 className={styles.title2} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="350" > Your Reality</h1>
                    <br />
                    <button className={`btn rounded-pill btn-1`} data-aos="fade-right" data-aos-easing="linear"     data-aos-duration="800" data-aos-delay="450">Get Started <img src={arrow} alt="arrow-up-right" className={styles.arrow} /></button>
                    </div>
                    </div>
                    <div className={`col-5 col-md-3 position-relative ${styles.hero_middle}`}>
                    <img src={robo} alt="" className={` ${styles.robo}`} id="robo" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="700" />
                    <img src={shadow} alt=""className={styles.shadow} />
                    </div>
                    
                    <div className={`${styles.shape} col-4 col-md-4 `}>
                        <div className={styles.layers}>
                        <img src={one} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1200" />
                        <img src={two} alt=""  className={styles.shapes}  data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1500" />
                        </div>
                        <div className={styles.layers}>
                        <img src={three} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1850" />
                        <img src={four} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1650" />
                        <img src={five} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1850" />
                        </div>
                        <div className={styles.layers}>
                        <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="2000" />
                        <img src={seven} alt="" className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="2300" />
                        </div>
                    </div>
                    <div className="col-12">
                        <img src={shapes} alt="" className={`${styles.shapes_mobile} ${styles.res_d}`}/>
                    </div>
                    </div>
            </div>    
        </>
    );
}