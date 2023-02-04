import styles from '../../styles/EndHero.module.css'

const EndHero = (props) =>{
    const title = props.title;
    const content = props.content;
    const buttonTitle = props.buttonTitle;

    return(
        <div className={styles.row}>
            <h2>{title}</h2>
            <p className={styles.p}>{content}</p>
            <button className={styles.button}>{buttonTitle}</button>
        </div>
    );
}

export default EndHero;