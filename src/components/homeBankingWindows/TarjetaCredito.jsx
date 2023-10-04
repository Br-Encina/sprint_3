import Tarjeta from "./Tarjeta";
import { Link } from "react-router-dom";
import Limite from "./Limite";
function Tarjetas({ user }) {
    return ( 
        < >
        <Tarjeta user={user}></Tarjeta>

        <h1 className="subtitle">Tu limite actual es de <strong>{user.limite}</strong></h1>

        <h3 className="subtittle">¿Desea aumetar su limite? <Link to="./src\components\homeBankingWindows\Limite.jsx">Aquí</Link></h3>
        </> 
     );
}

export default Tarjetas;