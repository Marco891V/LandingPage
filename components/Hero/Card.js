import { Button } from 'reactstrap'
import styles from '../../styles/Card.module.css'

function Card(props) {
    const { icon, title, buttonTitle, content, type} = props;

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.icon}>{icon()}</div>
                <h4 className={styles.cardtitle}><b>{title}</b></h4>
                <p className={styles.cardcontent}>{content}</p>
                <Button 
                    className={styles.buttoncard}
                    style={{
                        background: type === 'beauty' ? 'orangered' : (type === 'entertaiment' ? 'rgb(116, 3, 116)' : 'blue'),
                    }} 
                >
                    {buttonTitle}
                </Button>
            </div>
        </div>
    );
}

export default Card;