import styles from '../../styles/ButtonContent.module.css'

function Button(props) {
    const title = props.title 

    return(
        <button className={styles.buttonContent}>
            {title}
        </button>
    )
} 

export default Button