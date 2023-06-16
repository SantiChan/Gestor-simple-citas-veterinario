const MensajeError = ({mensajeError}) => {
    return ( 
        <div className="w-3/4 lg:w-2/3 2xl:w-3/5 h-fit m-5 p-4 mx-auto rounded-xl bg-red-400">
            <p className="text-white uppercase font-bold">{mensajeError}</p>
        </div>
     );
}
 
export default MensajeError;