import { Col, Button } from 'reactstrap'
import styles from '../../styles/EndHero.module.css'

const EndHero = (props) =>{
    const title = props.title;
    const content = props.content;
    const buttonTitle = props.buttonTitle;

    return(
        <Col className={styles.row}>
            <h2>{title}</h2>
            <p className={styles.p}>{content}</p>
            <Button className={styles.button}>{buttonTitle}</Button>
        </Col>

    );
}

export default EndHero;