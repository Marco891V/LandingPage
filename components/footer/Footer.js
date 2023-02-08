import { SiNextdotjs } from 'react-icons/si'
import styles from '../../styles/Footer.module.css'

function Footer(props) {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.col}>
                    <h3><SiNextdotjs /> Latana</h3>
                    <p className={styles.p}>We're here to help brands make better marketing decisions by delivering world-class, scalable, insights.</p>
                    <p className={styles.p}>Made with brain and heart in Berlin.</p>
                </div>
                <div className={styles.col}> </div>
                <div className={styles.col}>
                    <h5>Company</h5>
                    <ul>
                        <li className={styles.liUndecoration}>About Us</li>
                        <li className={styles.liUndecoration}>Carrers</li>
                        <li className={styles.liUndecoration}>Press Room</li>
                        <li className={styles.liUndecoration}>Contact Us</li>
                        <li className={styles.liUndecoration}>Knowledge Center</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h5>Product</h5>
                    <ul>
                        <li className={styles.liUndecoration}>Features</li>
                        <li className={styles.liUndecoration}>MRP</li>
                        <li className={styles.liUndecoration}>Book Demo</li>
                        <li className={styles.liUndecoration}>Measure Brand Awareness</li>
                        <li className={styles.liUndecoration}>Data Reach</li>
                        <li className={styles.liUndecoration}>Audience Segmentation</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h5>Roles</h5>
                    <ul>
                        <li className={styles.liUndecoration}>Brand/Marketing Leader</li>
                        <li className={styles.liUndecoration}>Consumer
                            <p>Insights/Researcher</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h5>Resources</h5>
                    <ul>
                        <li className={styles.liUndecoration}>Articles</li>
                        <li className={styles.liUndecoration}>Guides</li>
                        <li className={styles.liUndecoration}>Reports</li>
                        <li className={styles.liUndecoration}>Whitepapers</li>
                        <li className={styles.liUndecoration}>Customer Stories</li>
                        <li className={styles.liUndecoration}>Brand Insights</li>
                        <li className={styles.liUndecoration}>Indices</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;