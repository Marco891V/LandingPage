import styles from '../../styles/CardHero.module.css'

const CardHero = (props) => {
    const title = props.title;
    const content = props.content;
    const href = props.href;
    const textLink = props.textLink;

    return (
        <div className={styles.card}>
            <h4 className={styles.cardtitle}><b>{title}</b></h4>
            <p className={styles.cardcontent}>{content}</p>
            <br />
            <a className={styles.cardlink} href={href}>{textLink}</a>
        </div>
    );
}

export default CardHero;