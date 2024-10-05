import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);

  const handleWeight = (event) => {
    console.log(event.target.value);
    setWeight(event.target.value);
  };
  const handleHeight = (event) => {
    console.log(event.target.value);
    setHeight(event.target.value);
  };
  const imc = weight/((height/100)**2)
  const imcResult = ()=>{
    let respuestaIMC='' 
    if(imc < 18.5){
      respuestaIMC= 'Baja'
    }
    else if(imc< 24.8){
      respuestaIMC = 'Normal'
    }
    else if(imc< 29.9){
      respuestaIMC = 'Sobrepeso'
    }
    else{
      respuestaIMC = 'Obeso'
    }
    return respuestaIMC
  }
  return (
    <section className="w-[400px] mx-auto bg-slate-200 p-4 mt-8">
      <h1 className="text-3xl text-red-600 font-bold text-center">
        IMC Calculator
      </h1>

      <div className="pt-4">
        <p>Weight: {weight} kg</p>
        <input type="range" min="50" max="200" onChange={handleWeight} />
      </div>

      <div>
        <p>Height: {height} cm</p>
        <input type="range" min="50" max="200" onChange={handleHeight} />
      </div>

      <p className="font-bold ">Tu IMC es {imc.toFixed(2)}</p>

      <p className="font-bold text-2xl">Estado de IMC: {imcResult()}</p>
    </section>
  );
};

export default App;
