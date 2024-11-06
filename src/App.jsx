import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
