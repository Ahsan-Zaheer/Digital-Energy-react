import React, { useState } from 'react'
import styles from '../assets/home.module.css'
import pseudo from '../assets/pseudo.svg'
import robo from '../assets/robo3.svg'
import tb1 from '../assets/tb1.svg'
import tb2 from '../assets/tb2.svg'
import tb3 from '../assets/tb3.svg'
import tb4 from '../assets/tb4.svg'
import tb5 from '../assets/tb5.svg'
import heroImg from '../assets/heroImg.svg'
import rightIco from '../assets/rightIco.svg'
import leftIco from '../assets/leftIco.svg'
import shadow from '../assets/shadow.svg'



const ThirdSection = () => {

    const [services, setServices] = useState({
        hero_img: heroImg,
        title: 'Creative Design and Animations',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    })

    const sitem1 = document.getElementById('sitem1');
    const sitem2 = document.getElementById('sitem2');
    const sitem3 = document.getElementById('sitem3');
    const sitem4 = document.getElementById('sitem4');
    const sitem5 = document.getElementById('sitem5');


    const handlesitem1 = ()=>{
        setServices({
            hero_img: tb1,
            title: 'Creative Design and Animations',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        })
        sitem1.style.backgroundColor = '#1FA4E5';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#5A39EA';
    }
    const handlesitem2 = ()=>{
        setServices({
            hero_img: tb2,
            title: 'Social Media Management',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#1FA4E5';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#5A39EA';

    }
    const handlesitem3 = ()=>{
        setServices({
            hero_img: tb3,
            title: 'Digital Marketing',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#1FA4E5';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#5A39EA';
    }
    const handlesitem4 = ()=>{
        setServices({
            hero_img: tb4,
            title: 'SEO & SMEO',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#1FA4E5';
        sitem5.style.backgroundColor = '#5A39EA';
    }
    const handlesitem5 = ()=>{
        setServices({
            hero_img: tb5,
            title: 'Web and Mobile Applications',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#1FA4E5';
    }

  return (
    <div className= 'container'>
        <div className="row">
        <div className='position-relative col-6 col-sm-12'>
        <h1 className={styles.sec3title}>
        Great Features To Do Your Business <br /> Growth & Development
        </h1>
        <img src={pseudo} alt="" className={styles.pseudo2}/>
        </div>
        <div className={`col-lg-5 col-6 ${styles.res_d}`}>
                <div className={` ${styles.tshapes}`}>
                <div className="position-relative">
                <img src={robo} alt="" className={styles.robo3} />
                <img src={shadow} alt="" className={styles.shadow2} />
                </div>
                </div>
            </div>
            <div className={`col-lg-3 ${styles.middle} res-d mt-4`} id='display'>
                
                <div className={`${styles.main_item}`} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1000">
                <img src={services.hero_img} alt="" className={styles.heroImg} />
                <h3 className={styles.item_title}>{services.title}</h3>
                <p className={styles.item_info}>{services.info}</p>
                <img src={rightIco} alt="" className={styles.midIco} />
                </div>
            </div>
            <div className="col-lg-4">
                <div className={`${styles.items}`}>
                    <a href="#display"><div className={`${styles.sitem} ${styles.sitem1}`} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="300" id='sitem1' onClick={handlesitem1}>
                        <img src={tb1} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Creative Design and Animations</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a> 
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="400" id='sitem2' onClick={handlesitem2}>
                        <img src={tb2} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Social Media Management</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="500" id='sitem3' onClick={handlesitem3}>
                        <img src={tb3} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Digital Marketing</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="600" id='sitem4' onClick={handlesitem4}>
                        <img src={tb4} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>SEO & SMEO</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="700" id='sitem5' onClick={handlesitem5} >
                        <img src={tb5} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Web and Mobile Applications</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>

                </div>
            </div>
            <div className={`col-lg-3 ${styles.middle} ${styles.res_n}`}>
                
                <div className={`${styles.main_item}`} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1000">
                <img src={services.hero_img} alt="" className={styles.heroImg} />
                <h3 className={styles.item_title}>{services.title}</h3>
                <p className={styles.item_info}>{services.info}</p>
                <img src={rightIco} alt="" className={styles.midIco} />
                </div>
            </div>
            <div className={`col-lg-5 col-6 ${styles.res_n}`}>
                <div className={` ${styles.tshapes}`}>
                <div className="position-relative">
                <img src={robo} alt="" className={styles.robo3} />
                <img src={shadow} alt="" className={styles.shadow2} />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection