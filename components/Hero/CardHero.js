import styles from '../../styles/CardHero.module.css'

const CardHero = (props) => {
    const title = props.title;
    const content = props.content;
    const href = props.href;
    const link = props.link;

    return (
        <div className={styles.card}>
            <h4 className={styles.cardtitle}><b>{title}</b></h4>
            <p className={styles.cardcontent}>{content}</p>
            <a className={styles.cardlink} href={props.href}>{link}</a>
        </div>
    );
}

export default CardHero;