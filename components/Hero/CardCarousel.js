import styles from '../../styles/CardCarousel.module.css'

function Card(props) {
    const { img, title, buttonTitle, content, type } = props;

    return (
        <>
        <div style={{display: 'flex'}}>
            <div className={styles.card} style={{ textAlign: 'start' }}>
                <img src={img} />
                <div style={{paddingTop: '8px'}}>
                    <div>
                        <button
                            className={styles.buttoncard}
                            style={{
                                background: type === 'beauty' ? 'orangered' : (type === 'entertaiment' ? 'rgb(116, 3, 116)' : 'blue'),
                            }}
                        >
                            {buttonTitle}
                        </button>
                        <h4 className={styles.cardtitle}><b>{title}</b></h4>
                        <p className={styles.cardcontent}>{content}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card;