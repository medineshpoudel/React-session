
import Component1 from './components/component1';
import Component2 from './components/component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component1 id={1} name={"App"} type={"class"}/>
        <Component2 id={3} name={"App"} type={"class"}/>
      </header>
    </div>
  );
}

export default App;
