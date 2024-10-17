import React, { useEffect, useState } from "react";
import { crearEstudiante, deleteEstudiante, getEstudiantes, updateEstudiante } from "./services";
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
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('Estudiantes'))||[]);
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [idEstudiante, setIdEstudiente] = useState("");

  const leerEstudiantes = async()=>{
    const data =  await getEstudiantes()
    setEstudiantes(data)
  }
  useEffect(()=>{
    leerEstudiantes()
  },[])

const borrar = async(borrarEstudiante)=>{
  console.log('borrar')
  const arregloModificado = estudiantes.filter((estudiante)=>estudiante.id !== borrarEstudiante.id)

  const respuesta = await deleteEstudiante(borrarEstudiante.id)
  leerEstudiantes()
  /* if(respuesta){

    setEstudiantes(arregloModificado)
    localStorage.setItem('Estudiantes',JSON.stringify(arregloModificado))
  } */
}
  const EditarActualizar = (actualizarEstudiante) => {
    console.log("editar");
    setNombre(actualizarEstudiante.nombre);
    setCiudad(actualizarEstudiante.ciudad);
    setIdEstudiente(actualizarEstudiante.id);
  };

  const guardarEstudiante = async(event) => {
    event.preventDefault();
    if (idEstudiante == "") {
      const nuevoEtudiante = {
        id: crypto.randomUUID(),
        nombre: nombre,
        ciudad: ciudad,
      };
      console.log(nuevoEtudiante);
      const respuesta = await crearEstudiante(nuevoEtudiante)
      leerEstudiantes()
    }
    else{
      const estudianteActualizar = {
        nombre:nombre,
        ciudad:ciudad
      }
      const arregloActualizar = estudiantes.map((estudiante)=>{
        if(estudiante.id == idEstudiante){
          return {...estudiante, ...estudianteActualizar}
        }
        return estudiante        
      })
      const respuesta = await updateEstudiante(estudianteActualizar,idEstudiante)
      leerEstudiantes()
      /* if(respuesta){
        setEstudiantes(arregloActualizar)
        localStorage.setItem('Estudiantes',JSON.stringify(arregloActualizar))

      } */
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
