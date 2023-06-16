import Form from "./components/form";
import ListadoPacientes from "./components/listado-pacientes";
import { useState } from "react";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	const [ error, setError ] = useState('');

	const eliminarPaciente = id => {
		const objetoActualizado = pacientes.filter( paciente => paciente.id !== id);
		setPacientes(objetoActualizado);
	}

	return (
		<div className="bg-gray-200">
			<h2 className="font-bold text-3xl font-sans text-center py-5 uppercase">
				Cita para clinica <span className="text-indigo-500">veterinaria</span>
			</h2>
			<div className="grid lg:grid-cols-2 grid-rows-2">
				<Form
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
					setError={setError}
					error={error}
				/>
				<ListadoPacientes
					paciente={paciente}
					setPaciente={setPaciente}
					pacientes={pacientes}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;
