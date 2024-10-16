export const getEstudiantes = async () => {
  const response = await fetch(
    "https://670f00b53e71518616564ce1.mockapi.io/yesi/estudiantes"
  );
  const data = await response.json();
  console.log(data);
  return data;
};
export const crearEstudiante = async (estudiante) => {
  const response = await fetch(
    "https://670f00b53e71518616564ce1.mockapi.io/yesi/estudiantes",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(estudiante),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};
export const deleteEstudiante = async (idEstudiante) => {
  const response = await fetch(
    `https://670f00b53e71518616564ce1.mockapi.io/yesi/estudiantes/${idEstudiante}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const updateEstudiante = async (estudiante,idEstudiante) => {
  const response = await fetch(
    `https://670f00b53e71518616564ce1.mockapi.io/yesi/estudiantes/${idEstudiante}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(estudiante),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};