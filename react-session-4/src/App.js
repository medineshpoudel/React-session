import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Bird from './component/bird';
import Device from './component/device';
import Animal from './component/animal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello !!</div>
        <Routes>
        <Route path="/bird" element={<Bird />} />
        <Route path="/device" element={<Device />} />
        <Route path="/animal" element={<Animal />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
