import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    user: "",
    pass: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormulario({ ...formulario, [name]: value});
  };
  const logearse = () => {
    if (formulario.user == "ad" && formulario.pass == "123") {
      console.log("ingresaste");
      navigate('/Citas')
    } else {
      alert("erros en datos");
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className='w-96 mt-20 border p-4 rounded-md border-green-400'>
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Usuario</span>
          <input
            className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            name="user"
            value={formulario.user}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Contraseña</span>
          <input
            className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="password"
            name="pass"
            value={formulario.pass}
            onChange={handleChange}
          />
        </label>
        <button
          onClick={logearse}
          className="bg-green-700 flex m-auto mt-8  text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
        >
          Iniciar sesión
        </button>{" "}
      </div>
    </div>
  )
}

export default LoginPage