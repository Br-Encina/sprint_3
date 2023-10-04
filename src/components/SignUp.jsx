import { useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
	const navigate = useNavigate();
	const handleSignUp = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const name = data.get("name");
		const lastName = data.get("lastName");
		const email = data.get("email");
		const password = data.get("password");
		const confirmPassword = data.get("confirmPassword");
		var balance = data.get("balance");
		var limite = data.get("limite");
		if (password === confirmPassword) {
			const userData = {
				name: name,
				lastName: lastName,
				email: email,
				password: password,
				balance: balance,
				limite: limite,
			};
			if (window.localStorage.getItem(userData.email) !== null) {
				alert("El mail ya pertenece a una cuenta");
			} else {
				window.localStorage.setItem(
					userData.email,
					JSON.stringify(userData)
				);
				alert("cuenta creada");
				setUser(userData);
				navigate("/home");
			}
		} else {
			alert("Las contraseñas deben ser iguales");
		}

		
	};
	return (
		<div className="signUpPage">
			<h1>Sign up</h1>
			<form onSubmit={(e) => handleSignUp(e)} className="signUpForm">
				<input type="text" name="name" placeholder="Nombre" />
				<input type="text" name="lastName" placeholder="Apellido" />
				<input type="email" name="email" placeholder="Email" />
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirmar contraseña"
				/>

				<input type="number" name="balance" value={10000} hidden/>
				<input type="number" name="limite" value={25000} hidden/>

				<button>Crear</button>
			</form>
		</div>
	);
}

export default SignUp;
