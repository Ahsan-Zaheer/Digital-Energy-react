import React, { useEffect, useState } from 'react';
import styles from '../assets/home.module.css';
import pseudo from '../assets/pseudo.svg';
import icon1 from '../assets/box_icon1.svg'
import icon2 from '../assets/box_icon2.svg'
import icon3 from '../assets/box_icon3.svg'
import icon4 from '../assets/box_icon4.svg'
import icon5 from '../assets/box_icon5.svg'
import icon6 from '../assets/box_icon6.svg'

const FithSection = () => {
    const [box1InfoVisible, setBox1InfoVisible] = useState(false);
    const [box2InfoVisible, setBox2InfoVisible] = useState(false);
    const [box3InfoVisible, setBox3InfoVisible] = useState(false);

    useEffect(() => {
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const box3 = document.getElementById('box3');

        const handleMouseOver = (setInfoVisible) => () => {
            setInfoVisible(true);
        };

        const handleMouseOut = (setInfoVisible) => () => {
            setInfoVisible(false);
        };

        if (box1) {
            box1.addEventListener('mouseover', handleMouseOver(setBox1InfoVisible));
            box1.addEventListener('mouseout', handleMouseOut(setBox1InfoVisible));
        }
        if (box2) {
            box2.addEventListener('mouseover', handleMouseOver(setBox2InfoVisible));
            box2.addEventListener('mouseout', handleMouseOut(setBox2InfoVisible));
        }
        if (box3) {
            box3.addEventListener('mouseover', handleMouseOver(setBox3InfoVisible));
            box3.addEventListener('mouseout', handleMouseOut(setBox3InfoVisible));
        }

        return () => {
            // Cleanup: Remove the event listeners when the component is unmounted
            if (box1) {
                box1.removeEventListener('mouseover', handleMouseOver(setBox1InfoVisible));
                box1.removeEventListener('mouseout', handleMouseOut(setBox1InfoVisible));
            }
            if (box2) {
                box2.removeEventListener('mouseover', handleMouseOver(setBox2InfoVisible));
                box2.removeEventListener('mouseout', handleMouseOut(setBox2InfoVisible));
            }
            if (box3) {
                box3.removeEventListener('mouseover', handleMouseOver(setBox3InfoVisible));
                box3.removeEventListener('mouseout', handleMouseOut(setBox3InfoVisible));
            }
        };
    }, []); // The empty dependency array ensures that this effect runs once after the initial render

    return (
        <div className={`container ${styles.sec_5}`}>
            <div className='position-relative d-inline'>
                <h2 className={styles.sec_5_title}>This is how to get the ball rolling</h2>
                <img src={pseudo} alt="" className={styles.sec_5_pseudo} />
            </div>

            <div className="row">
                <div className={`col-lg-4`}>
                    <div className={`${styles.box_5}`} id='box1' >
                        <div className={styles.sec5_box}>
                        <h1 className={styles.counting}>
                            1.
                        </h1>
                        <img src={icon6} alt="" className={styles.sec5_icons} style={{ display: box1InfoVisible ? 'none' : 'block' }} />
                        <img src={icon1} alt="" className={styles.sec5_icons} style={{ display: box1InfoVisible ? 'block' : 'none' }} />
                        </div>
                        <h3 className={styles.box_5_title}>Get your battle plan ready</h3>
                        <ul
                            className={styles.box_5_info}
                            style={{ display: box1InfoVisible ? 'block' : 'none' }}
                        >
                            <li>1. Determine what you want to achieve</li>
                            <li>2. Determine your commitment in time and budget</li>
                        </ul>
                    </div>
                </div>
                <div className={`col-lg-4`}>
                    <div className={`${styles.box_5}`} id='box2'>
                        <div className={styles.sec5_box}>
                        <h1 className={styles.counting}>
                            2.
                        </h1>

                        <img src={icon3} alt="" className={styles.sec5_icons} style={{ display: box2InfoVisible ? 'none' : 'block' }} />
                        <img src={icon4} alt="" className={styles.sec5_icons} style={{ display: box2InfoVisible ? 'block' : 'none' }} />
                        
                        </div>
                        <h3 className={styles.box_5_title}>Reach out to us</h3>
                        <ul
                            className={styles.box_5_info}
                            style={{ display: box2InfoVisible ? 'block' : 'none' }}
                        >
                            <li>1. Determine what you want to achieve</li>
                            <li>2. Determine your commitment in time and budget</li>
                        </ul>
                    </div>
                </div>
                <div className={`col-lg-4`}>
                    <div className={`${styles.box_5}`} id='box3'>
                        <div className={styles.sec5_box}>
                        <h1 className={styles.counting}>
                            3.
                        </h1>
                        
                        <img src={icon2} alt="" className={styles.sec5_icons} style={{ display: box3InfoVisible ? 'none' : 'block' }}   />
                        <img src={icon5} alt="" className={styles.sec5_icons} style={{ display: box3InfoVisible ? 'block' : 'none' }}   />
                        
                        </div>

                        <h3 className={styles.box_5_title}>Information Gathering</h3>
                        <ul
                            className={styles.box_5_info}
                            style={{ display: box3InfoVisible ? 'block' : 'none' }}
                        >
                            <li>1. Determine what you want to achieve</li>
                            <li>2. Determine your commitment in time and budget</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FithSection;
