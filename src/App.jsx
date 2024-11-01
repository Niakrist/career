import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

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
