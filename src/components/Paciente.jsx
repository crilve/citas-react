const Paciente = () => {
    return (
        <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}                    
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}                    
                <span className="font-normal normal-case">Cristóbal</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}                    
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}                    
                <span className="font-normal normal-case">10 Enero de 2024</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase text-justify">Síntomas: {''}                    
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis facilis nisi iure officia aliquam repudiandae, possimus culpa exercitationem perspiciatis eligendi. Doloremque quae a necessitatibus natus pariatur eius ipsa nisi ipsum.</span>
            </p>
        </div>
    );
}

export default Paciente;
