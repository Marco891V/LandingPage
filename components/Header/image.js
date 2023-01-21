import styles from '../../styles/Landing.module.css'

const Img = (props) => {
    const src = props.src;
    const alt = props.alt;

    return (
        <img 
            className={styles.imgheader} 
            src={props.src}
            alt={props.alt}
        />
    );
}

export default Img

