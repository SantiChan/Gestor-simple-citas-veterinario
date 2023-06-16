const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, mascota, email, fecha, sintomas, id } = paciente;

  const checkDelete = () => {
    const check = confirm('Estas seguro que quieres eliminarlo ?');

    if(check){
      eliminarPaciente(id);
    }
  }

  return (
    <div className="w-3/4 lg:w-2/3 2xl:w-3/5 h-fit text-center mx-auto bg-white rounded-xl shadow-xl">
      <div className="text-left py-3 font-bold px-3">
        <p className="text-xl">Ficha De Paciente:<span className="text-indigo-500"> {mascota}</span></p>
        <p>
          Nombre:<span className="font-normal"> {nombre}</span>
        </p>
        <p>
          Nombre Mascota:<span className="font-normal"> {mascota}</span>
        </p>
        <p>
          Email:<span className="font-normal"> {email}</span>
        </p>
        <p>Fechas De Entrada <span className="font-normal"> {fecha}</span></p>
        <p>Síntomas:<span className="font-normal"> {sintomas}</span></p>
      </div>
      <div className="flex justify-around p-5">
        <button type="button" onClick={() => setPaciente(paciente)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Editar
        </button>
        <button type="button" onClick={checkDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
