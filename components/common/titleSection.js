import { Row } from 'reactstrap'
import styles from '../../styles/Landing.module.css'

const TitleSection = (props) => {
    const title = props.title;

    return(
        <Row className={styles.row}>
          <h2>{title}</h2>
        </Row>
    );
}

export default TitleSection;