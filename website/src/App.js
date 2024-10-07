import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Botbar from './Botbar/Botbar';
import './App.css';
import Photo from './Photos/Photos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Photo/>
      <Botbar/>
    </div>
  );
}

export default App;
