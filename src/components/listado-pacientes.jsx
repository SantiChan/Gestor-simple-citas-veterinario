import Paciente from "./paciente";


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="w-3/4 lg:w-2/3 2xl:w-3/5 h-fit  m-5 text-center pb-8 mx-auto bg-white rounded-xl">
            <h2 className="font-bold text-center uppercase text-indigo-500 py-8 text-xl">Listado de Pacientes</h2>
            {
                pacientes && pacientes.length ? (pacientes.map((paciente, index) => (
                    <div key={index} className="mt-10">
                        <Paciente
                            key={index}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    </div>
                ))) : <p>Añade nuevos Pacientes!</p>
            }
        </div>
    )
}

export default ListadoPacientes;