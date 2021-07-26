import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/hello'
import Welcome from './components/welcome'
function App() {

  return (
    <div className="App">
        <Hello name="saketh" hero="Batman">
          <p>this is children props</p>
          <div>Cool</div>
        </Hello>
        <Hello name = "clark" hero="superman" />
        <Hello name = "Diana" hero="wonder woman"/>
    </div>
  );

  
}

export default App;
