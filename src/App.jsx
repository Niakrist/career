import { Header, Main, Footer } from "@/components";
import styles from "./App.module.css";
const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
