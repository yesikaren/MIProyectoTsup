import React from "react";

const App = () => {
  return (
    <main className="border border-gray-950 w-2/5 bg-stone-800 text-white flex justify-center">
     <div>
        <h1 className="text-3xl font-bold underline">Students List</h1>
        <form className="">
          <label>Nombre
            <input type="text" className="border" placeholder="Ex. Mariana Navarro"/>
            </label>
          <label>Ciudad<input type="text" className="border " placeholder="Ex.Chiclayo"/></label>
          <button className="border p-2">Guardar</button>
          
        </form>
     </div>

    </main>
    
  );
};

export default App;
