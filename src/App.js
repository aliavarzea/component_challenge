import './App.css';
import Udemy from "./components/Udemy"
import AirBnb from './components/Airbnb';

function App() {
  return (
    <div className="App">
      <p>Udemy challenge</p>
      <Udemy/>

      <p>Air Bnb challenge</p>
      <AirBnb/>
    </div>
  );
}

export default App;
