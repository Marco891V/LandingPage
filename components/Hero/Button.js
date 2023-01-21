import { Button as UIButton } from 'reactstrap'
import styles from '../../styles/Landing.module.css'

const Button = (props) => {
    const title = props.title 

    return(
        <UIButton className={styles.buttoncontent}>
            {title}
        </UIButton>
    )
} 

export default Button