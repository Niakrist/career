import VacancyBlock from '../vacancyBlock/VacancyBlock';
import styles from './list.module.css';

const VacancyList = () => {
  return (
    <div className={styles.blockWrapper}>
      <VacancyBlock />
    </div>
  )
}

export default VacancyList;