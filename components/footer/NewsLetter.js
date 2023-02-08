import { SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl'
import { TiSocialTwitter, TiSocialFacebookCircular, TiSocialYoutube } from 'react-icons/ti'
import styles from '../../styles/NewsLetter.module.css'

function NewsLetter(props) {

    return (
        <>
            <div className={styles.row}>
                <div>
                    <h5>Subscribe to our newsletter</h5>
                    <input className={styles.input} type="text" />
                    <input className={styles.input} type="text" />
                    <button className={styles.button}>Subscribe</button>
                    <p className={styles.p}><input type="checkbox" /> I accept newsletter</p> 
                </div>
                <div className={styles.center}>
                    <SlSocialLinkedin className={styles.icon} />
                    <TiSocialTwitter className={styles.icon} />
                    <TiSocialFacebookCircular className={styles.icon} />
                    <SlSocialInstagram className={styles.icon} />
                    <TiSocialYoutube className={styles.icon} />
                </div>
            </div>
        </>
    );
}

export default NewsLetter;