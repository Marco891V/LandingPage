import styles from '../../styles/ImageHero.module.css'

function ImgHero(props) {
    const {src, alt, type} = props;

    return (
        <img 
            className={styles.imghero}
            style={{
                height: type === 'large' ? '400px' : (type === 'small' ? '90%' : null),
                width: type === 'large' ? '800px' : (type === 'small' ? '90%' : null),
            }} 
            src={src}
            alt={alt}
        />
    );
}

export default ImgHero

