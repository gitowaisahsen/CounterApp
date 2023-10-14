import logo from './logo.svg';
import './App.css';
import CounterComp from './CounterComp.jsx';


function App() {
  
  return (
    <div className="App">

      <h3 style={{
        background: "#167d74",
        height: "50px",
        color: "white",
        marginTop:"0px",
        marginBottom:"0px",
      }}>Owais Ahsen <br/> IHI Assignment </h3>
      
      <header className="App-header">
      
        <CounterComp/>
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>

      
    </div>
  );
}

export default App;
