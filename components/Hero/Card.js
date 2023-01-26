import styles from '../../styles/Card.module.css'

function Card(props) {
    const { icon, title, buttonTitle, content, type} = props;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>{icon()}</div>
                <h4 className={styles.cardtitle}><b>{title}</b></h4>
                <p className={styles.cardcontent}>{content}</p>
            </div>
        </div>
    );
}

export default Card;