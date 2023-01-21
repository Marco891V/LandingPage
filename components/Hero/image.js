import styles from '../../styles/Landing.module.css'

function ImgHero(props) {
    const {src, alt, type} = props;

    return (
        <img 
            className={styles.imghero}
            style={{
                height: type === 'large' ? '400px' : (type === 'small' ? '300px' : null),
                width: type === 'large' ? '800px' : (type === 'small' ? '300px' : null),
                margin: type === 'small' ? '20px, 50px, 20px, 20px' : null
            }} 
            src={src}
            alt={alt}
        />
    );
}

export default ImgHero

