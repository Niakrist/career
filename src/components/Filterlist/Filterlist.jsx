import { Container, FilterItem } from "@/components";
import { filterListData } from "@/mookData";
import styles from "./Filterlist.module.css";

const Filterlist = () => {
  return (
    <section className={styles.filter}>
      <Container>
        <ul className={styles.filterlist}>
          {filterListData.map((filter) => (
            <li key={filter.name}>
              <FilterItem filter={filter} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Filterlist;
