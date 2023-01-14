import logo from './logo.svg';
import './App.css';

function App() { // function precisa ter o mesmo nome do App.js
  return (
    <div className="App"> {/* posso executar um bloco sem necessariamente ter uma tag com <>code</> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React!
        </a>
      </header>
    </div>

  );
}

export default App; // esta exportando o App como default
