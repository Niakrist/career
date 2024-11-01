import styles from "./item.module.css";
import Arrow from "../icons/Arrow";
import Briefcase from "../icons/Briefcase";
import Geo from "../icons/Geo";
import Filter from "../icons/Filter";

const FilterItem = ({ filterData }) => {
  if (filterData.type === "search") {
    return (
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <Geo className={styles.icon} />
          <input
            id="search"
            type="search"
            placeholder="Город"
            className={styles.input}
          />
        </div>
      </form>
    );
  }

  if (filterData.type === "one") {
    return (
      <button className={styles.form}>
        <Briefcase />
        <span className={styles.inputWrapper}>{filterData.title}</span>
        <Arrow className={styles.icon} />
      </button>
      // <form className={styles.form}>
      //   <div className={styles.inputWrapper}>
      //     <Geo className={styles.icon} />
      //     <input
      //       id="search"
      //       type="search"
      //       placeholder="Город"
      //       className={styles.input}
      //     />
      //   </div>
      // </form>
    );
  }

  if (filterData.type === "many") {
    return (
      <button className={styles.form}>
        <Filter />
        <span className={styles.inputWrapper}>{filterData.title}</span>
        <Arrow className={styles.icon} />
      </button>
    );
  }

  // if (type === 'one') {
  //   return (
  //     <form className={styles.form}>
  //       <div className={styles.inputWrapper}>
  //         <Briefcase />
  //         <input id="search" type="search" placeholder='Тип занятости' className={styles.input} />
  //       </div>
  //       <button><Arrow /></button>
  //     </form>
  //   )
  // }

  // return (
  //   <form className={styles.form}>
  //     <div className={styles.inputWrapper}>
  //       <Filter />
  //       <input id="search" type="search" placeholder='Дополнительные фильтры' className={`${styles.input} ${styles.inputSearch}`} />
  //     </div>
  //     <button><Arrow /></button>
  //   </form>
  // )
};

export default FilterItem;
