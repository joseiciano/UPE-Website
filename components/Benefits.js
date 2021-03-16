import BenefitItem from './BenefitItem';
import styles from '../styles/Benefits.module.css'

const Benefits = () => {
    return (
        <div className={styles.grid}>
            <div>
                <img src="http://pngimg.com/uploads/cat/cat_PNG50514.png" width='300' height='300'></img>
            </div>
            <div className={styles.leftGrid}>
                <h1>Our Benefits</h1>
                <BenefitItem title={'SCHOLARSHIPS'} iconSource={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <BenefitItem title={'MEMORABILIA'} iconSource={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <BenefitItem title={'RECOMMENDATIONS'} iconSource={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <BenefitItem title={'LEADERSHIP ROLES'} iconSource={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                <BenefitItem title={'MEMBER EVENTS'} iconSource={'http://pngimg.com/uploads/cat/cat_PNG50514.png'}/>
                
                <button href='/application'>Membership Application</button>
            </div>
        </div>
    )
}

export default Benefits