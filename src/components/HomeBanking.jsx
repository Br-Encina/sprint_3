import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import { useEffect, useState } from "react";
import Cuentas from "./homeBankingWindows/Cuentas";
import Pagos from "./homeBankingWindows/Pagos";
import Transferencias from "./homeBankingWindows/Transferencias";
import Prestamos from "./homeBankingWindows/Prestamos";
import Convertidor from "./homeBankingWindows/Convertidor";
import Tarjetas from "./homeBankingWindows/TarjetaCredito";
import Ayuda from "./homeBankingWindows/ayuda";
import Limite from "./homeBankingWindows/Limite";
function HomeBanking({ user, setUser }) {
	const [page, setPage] = useState("cuentas");
	const [show, setShow] = useState();
	const getElement = () => {
		switch (page) {
			case "cuentas":
				return <Cuentas user={user} />;
			case "pagos":
				return <Pagos user={user} />;
			case "transferencias":
				return <Transferencias user={user} />;
			case "prestamos":
				return <Prestamos user={user} setUser={setUser} />;
			case "convertidor":
				return <Convertidor />;
			case "tarjetas":
				return <Tarjetas user={user} />;
			case "ayuda":
				return <Ayuda user={user} />;
			case "limite":
				return <Limite user={user} />;
			
			default:
				break;
		}
	};
	useEffect(() => {
		setShow(getElement());
	}, [page]);
	return (
		<>
		
			<div className="homeBankingDiv">{show ? show : ""}</div>

			<Sidebar
				setUser={setUser}
				user={user}
				page={page}
				setPage={setPage}
			/>
		</>
	);
}

export default HomeBanking;
