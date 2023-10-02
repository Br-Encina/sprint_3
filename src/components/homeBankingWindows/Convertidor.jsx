
function Conversion() {

  const convertir = function(e) {
    e.preventDefault()
    const monto = document.getElementById('monto');
    const moneda = document.getElementById('moneda');
    const tabla = document.querySelector('tbody')



    while(tabla.firstChild){
          tabla.removeChild(tabla.firstChild);
    }
    
   
    const montoValue = parseFloat(monto.value);
    const monedaValue = moneda.value;

    let resultado = 0;

    if (monedaValue === 'Dolar') {
      resultado = montoValue / 735;
    }
    if (monedaValue === 'Euro') {
      resultado = montoValue / 848;
    }
    if (monedaValue === 'Real') {
      resultado = montoValue / 71;
    }
 const conversion = document.createElement('tr')
  conversion.innerHTML = `
    <td><h2>${montoValue}(Pesos Argetinos)</h2></td>
    <td><h2>=</h2></td>
    <td><h2>${resultado.toFixed(2)}(${moneda.value}) </h2></td>
   `;
     tabla.appendChild(conversion)
}
    return ( <>

<div className="cotizacionesPage">
	
<h1> Calculadora de divisas</h1>
    <form  onSubmit={convertir}>

       <label htmlFor="monto">Introducir monto en pesos:</label>
       <input className="conversionInput" type="text" id="monto"/>
	   <br/>
       <label htmlFor="moneda">Seleccionar moneda</label>
       <select name="moneda" id="moneda">
          <option value="Dolar">Dolar</option>
          <option value="Euro">Euro</option>
         <option value="Real">Real</option>
        </select>
		<br />
        <button type="submit" id="botonConvertir">Convertir</button>
    </form>

    

    <table>
    <tbody></tbody>
    </table>


    <br />
</div>
     
    </> );
}

export default Conversion;
