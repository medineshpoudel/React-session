import logo from './logo.svg';
import './App.css';
import Functional from './component/functional';
import HOC from './component/HOC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Functional content={"this is content"}/>
        <HOC content={<Functional/>}/>
      </header>
    </div>
  );
}

export default App;
