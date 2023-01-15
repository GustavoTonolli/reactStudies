
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
function App() { // function precisa ter o mesmo nome do App.js


  return (

    <div className="App"> {/* posso executar um bloco sem necessariamente ter uma tag com <>code</> */}
      <Header />
      <Body />
      {/* <img src={Logo} alt="logo" /> {/* imagem fora do public */}
      {/* <img src="logo192.png" alt="logo" /> {/* imagem dentro do public */}
    </div>

  );
}

export default App; // esta exportando o App como default
