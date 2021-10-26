import logo from './logo.svg';
import './App.css';

function App() {

  const arr = [ "Hello, World!", "My name is Nykolas", "Random" ];

  let Card = ( { message } ) => {
    return (
      <div className="card">
        { message }
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { arr.map( el => <Card message={el} /> ) }
      </header>
    </div>
  );
}

export default App;
