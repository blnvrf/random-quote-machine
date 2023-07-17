import './App.css';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="bg-regal-blue w-screen h-screen p-6 flex flex-col">
      <div className="w-full flex justify-end px-8">
        <Header></Header>
      </div>

      <div className="flex flex-col w-full h-full justify-center items-center gap-y-4 text-white">
        <p className="">Quote</p>
        <span className="">Author</span>
        <button className="">Submit</button>
      </div>

      <div className="text-sm flex justify-center text-white">
        Created by © Blin Varfi
      </div>
    </div>
  );
}

export default App;
