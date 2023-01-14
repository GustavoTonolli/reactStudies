
import './App.css';
import Logo from './componentes/imgs/logo512.png';
function App() { // function precisa ter o mesmo nome do App.js
  const nome = 'Gustavo';
  const curso = () => {
    return ('ReactJS');
  }

  return (
    <div className="App"> {/* posso executar um bloco sem necessariamente ter uma tag com <>code</> */}
      <p>{'Nome: ' + nome}</p> {/* utilizando codigo JS junto com HTML */}
      <p>{'Curso: ' + curso()}</p> {/* Retornando string com funcao */}
      <img src={Logo} alt="logo" /> {/* imagem fora do public */}
      <img src="logo192.png" alt="logo" /> {/* imagem dentro do public */}
    </div>

  );
}

export default App; // esta exportando o App como default
