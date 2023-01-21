import { Col } from 'reactstrap'
import styles from '../../styles/Landing.module.css'

function ClientsBar(props) {
    let { client } = props;

    return (
        <>
            <Col md="2" className={styles.boxclient}>
                <img
                    className={styles.imgclient}
                    src={client.image}
                />
            </Col>
        </>
    );
}

export default ClientsBar