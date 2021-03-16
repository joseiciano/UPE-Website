import styles from '../styles/Benefits.module.css';

const BenefitItem = ({title, iconSource}) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <img src={iconSource} width='50' height='50'></img>
            </div>
            <div className={styles.benefits}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default BenefitItem