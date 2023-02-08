import styles from '../../styles/ImageHeader.module.css'

function ImgHeader(props) {
    const src = props.src;
    const alt = props.alt;

    return (
        <img 
            className={styles.imgHeader} 
            src={props.src}
            alt={props.alt}
        />
    );
}

export default ImgHeader;

