import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import styles from '../../styles/PrivacyCopy.module.css'

const Privacy = (props) => {
    return(
        <>
            <div className={styles.row}>
                <p>Impressum &nbsp; Privacy Policy &nbsp; Terms & Condition &nbsp; Contact Us</p>
            </div>
            <div className={styles.rowCopy}>
            <p><AiOutlineCopyrightCircle />Ladana etuttelecosechevengono scritte</p>
            </div>
        </>
    );
}

export default Privacy;