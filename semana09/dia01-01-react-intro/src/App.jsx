/* 
function App() {
  

  return (
    <>
      <h1>hola react</h1>
    </>
  )
}

export default App
 */
// const Saludo = ()=>{
//   return <h4>hola karen</h4>
// }
// const Despedida = ()=>{
//   return <h4>Chauu karen</h4>

import Despedida from "./components/Despedida"
import Saludo from "./components/Saludo"
import { listaFrutas, nombres } from "./frutas"

// }
const App = () => {
  const karencita = 'gatita bonita negrita'
  return (
    <>
      <Saludo/>
      <h3>mensje App {karencita}</h3>
      <h2>otro {listaFrutas.join(", ")}</h2>
      <Despedida/>
      {1+2}
      <h5>{nombres.join(', ')}</h5>
    </>
  )
}

export default App
