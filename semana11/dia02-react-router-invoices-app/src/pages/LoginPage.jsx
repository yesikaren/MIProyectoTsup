import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    user: "",
    pass: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const logearse = () => {
    if (formulario.user == "admin" && formulario.pass == "123456") {
      console.log("ingresaste");
      navigate('/home')
    } else {
      alert("datos no validos");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col">
        <span className="text-lg font-semibold">Usuario</span>
        <input
          className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="user"
          value={formulario.user}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col">
        <span className="text-lg font-semibold">Contraseña</span>
        <input
          className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          name="pass"
          value={formulario.pass}
          onChange={handleChange}
        />
      </label>
      <button
        onClick={logearse}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Iniciar sesión
      </button>{" "}
    </div>
  );
};

export default LoginPage;
