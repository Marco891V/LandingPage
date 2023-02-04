import styles from '../../styles/ClientsBar.module.css'

function ClientsBar(props) {
    let { client } = props;

    return (
        <>
            <div className={styles.row}>
                <div className={styles.boxClient}>
                    <img
                        className={styles.imgClient}
                        src={client.image}
                    />
                </div>
            </div>
        </>
    );
}

export default ClientsBar