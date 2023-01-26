import styles from '../../styles/ImageHeader.module.css'

const ImgHeader = (props) => {
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

export default ImgHeader;

