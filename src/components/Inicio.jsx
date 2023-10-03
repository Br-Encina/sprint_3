import { Link } from "react-router-dom";

function Inicio() {
	return (
		<div className="inicioPage">
			<h1>Inicio</h1>
			<div className="buttonDiv">
				<Link to="/login"><button id="button1">
					Log In
				</button></Link>
				<Link to="/signup"><button id="button2">
					Sign up
				</button></Link>
			</div>
		</div>
	);
}

export default Inicio;
