const api = new API('45d82cebc76f286abda94da4e798cb11e5cf61e43045c218461206c70bda127e');
const ui = new Interface();


const formulario = document.querySelector("#formulario");
const selectMoneda = document.querySelector("#moneda");
const selectCriptoMoneda = document.querySelector("#criptomoneda");

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const monedaSeleccionada = selectMoneda.options[selectMoneda.selectedIndex].value;
    const monedaCriptoSeleccionada = selectCriptoMoneda.options[selectCriptoMoneda.selectedIndex].value;
    //validamos campos vacios
    if(monedaSeleccionada ==='' || monedaCriptoSeleccionada ===''){
        //enviar mensaje error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        //llenar el select decripto moneda

    }

});