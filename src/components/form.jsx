import { useState, useEffect } from "react";
import MensajeError from "./mensaje-error";

const Form = ({pacientes, setPacientes, paciente, error, setError, setPaciente}) => {

	const [ nombre, setNombre ] = useState('');
	const [ mascota, setMascota ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ fecha, setFecha ] = useState('');
	const [ sintomas, setSintomas ] = useState('');

	useEffect(() => {
		if(Object.keys(paciente).length > 0 ){
			setNombre(paciente.nombre);
            setMascota(paciente.mascota);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

	const handleSubmit = (e) => {
		e.preventDefault();

		const pacienteObj = {
			nombre,
			mascota,
			email,
			fecha,
			sintomas,
		};

		if(paciente.id){
			pacienteObj.id = paciente.id
			const pacientesEditado = pacientes.map( oldPaciente =>  oldPaciente.id === paciente.id ? pacienteObj : oldPaciente);
			setPacientes(pacientesEditado);
			setPaciente({});
		}else{
			if([nombre, mascota, email, fecha, sintomas].includes('')){
				setError('Necesitas todos los campos');
			};
			setError('');
			pacienteObj.id = generarId();
			setPacientes([...pacientes, pacienteObj]);
		}

		setNombre('');
        setMascota('');
        setEmail('');
        setFecha('');
        setSintomas('');
	}

  return(
    <div className="w-3/4 lg:w-2/3 2xl:w-3/5 h-fit m-5 p-3 mx-auto bg-white rounded-xl">
      <div>
		<h2 className="font-bold text-center uppercase text-indigo-500 py-8 text-xl">Formulario de Paciente</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col py-5">
					{ error ? <MensajeError mensajeError={error} /> : null}
					<label className="pt-5 font-bold uppercase ">Nombre:</label>
					<input
							type="text"
							className="shadow-md py-2 mt-3 px-2"
							placeholder=" Nombre"
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
					/>
					<label className="pt-5 font-bold uppercase font-sans mt-6">Nombre mascota:</label>
					<input
							type="text"
							className="shadow-md py-2 mt-3 px-2"
							placeholder=" Nombre Mascota"
							value={mascota}
							onChange={(e) => setMascota(e.target.value)}
					/>
					<label className="pt-5 font-bold uppercase font-sans mt-6">Email:</label>
					<input
							type="email"
							className="shadow-md py-2 mt-3 px-2"
							placeholder=" Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
					/>
					<label className="pt-5 font-bold uppercase font-sans mt-6">Fecha de entrada:</label>
					<input
							type="date"
							className="shadow-md py-2 mt-3 px-2"
							placeholder=" Fecha de Entrada"
							value={fecha}
							onChange={(e) => setFecha(e.target.value)}
					/>
					<label className="pt-5 font-bold uppercase font-sans mt-6">Sintomas</label>
					<textarea
							type="textASrea"
							className="shadow-md mt-3 px-2"
							placeholder=" Sintomas"
							value={sintomas}
							onChange={(e) => setSintomas(e.target.value)}
					/>
					<button type="submit" className="uppercase bg-indigo-500 font-bold text-white p-4 mt-8 rounded-md">Añadir Nuevo Paciente</button>
			</form>
        </div>
    </div>
  )
}

export default Form;