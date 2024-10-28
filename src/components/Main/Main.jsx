import { Filterlist, VacancyList } from "@/components";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Filterlist />
      <VacancyList />
    </main>
  );
};

export default Main;
