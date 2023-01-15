
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
import Dados from './componentes/Dados';


function App() { // function precisa ter o mesmo nome do App.js
  const profissao = "Fullstack Developer"
  return (

    <> {/* posso executar um bloco sem necessariamente ter uma tag com <>code</> */}
      <Header />
      <Body />
      <Dados
        nome='Gustavo Tonolli'
        curso='ReactJS'
        profissao={profissao}
      /> {/* nome dos atributos criados */}
      {/* <img src={Logo} alt="logo" /> {/* imagem fora do public */}
      {/* <img src="logo192.png" alt="logo" /> {/* imagem dentro do public */}
    </>

  );
}

export default App; // esta exportando o App como default
