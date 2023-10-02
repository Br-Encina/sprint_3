
function Ayuda({user}) {

    function reclamo(e) {
		e.preventDefault();
		alert("Su correo a sido enviado, nos estaremos comunicando con usted dentro de las próximas 48hs habiles");
    }
    return (  
        <>
          <h1>Contactanos</h1>
         <form className="formularioDeContacto" action="mailto:brunoencina12@gmail.com" method="post" onSubmit={reclamo}>

            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" value={`${user.name} ${user.lastName}`} required/>

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" value={`${user.email}`} required/>

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea name="mensaje" id="mensaje" rows="10" required/>

            <button type="submit">Enviar</button>

        </form>
        </>
    );
}

export default Ayuda;