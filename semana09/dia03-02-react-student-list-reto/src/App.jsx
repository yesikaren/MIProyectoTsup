import React, { useState } from "react";
const data = [
  {
    id: 1,
    nombre: "yesica",
    ciudad: "tacna",
  },
  {
    id: 2,
    nombre: "Efrain",
    ciudad: "Arequipa",
  },
];

const App = () => {
  const [estudiantes, setEstudiantes] = useState(data);
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [idEstudiante, setIdEstudiente] = useState("");
const borrar = (borrarEstudiante)=>{
  console.log('borrar')
  const arregloModificado = estudiantes.filter((estudiante)=>estudiante.id !== borrarEstudiante.id)
  setEstudiantes(arregloModificado)
}

  const EditarActualizar = (actualizarEstudiante) => {
    console.log("editar");
    setNombre(actualizarEstudiante.nombre);
    setCiudad(actualizarEstudiante.ciudad);
    setIdEstudiente(actualizarEstudiante.id);
  };

  const guardarEstudiante = (event) => {
    event.preventDefault();
    if (idEstudiante == "") {
      const nuevoEtudiante = {
        id: crypto.randomUUID(),
        nombre: nombre,
        ciudad: ciudad,
      };
      console.log(nuevoEtudiante);
      setEstudiantes([...estudiantes, nuevoEtudiante]);
    }
    else{
      const arregloActualizar = estudiantes.map((estudiante)=>{
        if(estudiante.id == idEstudiante){
          const estudianteActualizar = {
            nombre:nombre,
            ciudad:ciudad
          }
          return {...estudiante, ...estudianteActualizar}
        }
        return estudiante        
      })
      setEstudiantes(arregloActualizar)
    }
    setNombre('')
    setCiudad('')
    setIdEstudiente('')

  };

  return (
    <main className=" text-white flex justify-center p-10 bg-black h-screen items-start">
      <div className="w-2/5  bg-stone-800 p-16">
        <h1 className="font-bold text-center mb-10 text-s text-6xl">
          Students List
        </h1>
        <form className="flex flex-col justify-center gap-8 border p-8 rounded-md">
          <label>
            <span className="inline-block w-[15%] text-xl">Nombre</span>
            <input
              type="text"
              className="w-[85%] p-2  border  border-3 rounded-md  bg-[#3b3b3b]"
              placeholder="Ex. Mariana Navarro"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </label>
          <label>
            <span className="inline-block w-[15%] text-xl ">Ciudad</span>
            <input
              type="text"
              className=" border-2 rounded-md w-[85%] p-2 bg-[#3b3b3b] "
              placeholder="Ex.Chiclayo"
              value={ciudad}
              onChange={(event) => setCiudad(event.target.value)}
            />
          </label>
          <button
            onClick={guardarEstudiante}
            className={`border p-4 rounded-md  text-xl font-bold ${idEstudiante == ""?"bg-black":"bg-gray-600"}`}          >
            Guardar
          </button>
        </form>

        <div className="border p-8 rounded-md mt-10 items-center">
          {estudiantes.map((estudiante) => (
            <div
              key={estudiante.id}
              className="flex justify-between items-center mb-6"
            >
              <div className="w-8 h-8 border rounded-full"></div>
              <div>
                <p>{estudiante.nombre}</p>
              </div>
              <p>{estudiante.ciudad}</p>
              <button
                onClick={() => EditarActualizar(estudiante)}
                className="p-1 w-20 h-12 rounded-md bg-black"
              >
                ✏️
              </button>
              <button onClick={()=>borrar(estudiante)} className="p-1 w-20 h-12 rounded-md bg-black">❌</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
