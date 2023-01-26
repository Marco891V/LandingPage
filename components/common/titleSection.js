import styles from '../../styles/TitleSection.module.css'

const TitleSection = (props) => {
    const title = props.title;

    return(
        <div className={styles.row}>
          <h2>{title}</h2>
        </div>
    );
}

export default TitleSection;