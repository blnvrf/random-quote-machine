import './App.css';
import Header from './Components/Header/Header';
import QuoteGenerator from './Components/QuoteGenerator/QuoteGenerator';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="bg-regal-blue w-screen h-screen p-6 flex flex-col">
      <Header></Header>
      <QuoteGenerator></QuoteGenerator>
      <Footer></Footer>
    </div>
  );
}

export default App;
