class Interface{
    constructor(){
        this.init();
    }

    init(){
        this.cargarSelect();
    }

    cargarSelect(){

        const selectCriptoMonedas=document.querySelector("#criptomoneda");
        api.obtenerMonedas()
        .then(monedas =>{
            for(const [key,value] of Object.entries(monedas.monedas.Data)){
                //construmos el select
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                selectCriptoMonedas.appendChild(opcion);
            }
        })
    }



    mostrarMensaje(mensaje,clase){
        const divMensaje = document.querySelector(".mensajes");
        const div = document.createElement('div');
        div.className = clase;
        div.appendChild(document.createTextNode(mensaje));
        //insertamos
        divMensaje.appendChild(div);

        setTimeout(()=>{
            div.remove();
        },2000);
        
    }

    //mostrar resultado
    montrarResultado(resultado,moneda,crypto){

        const resultadoDiv = document.querySelector("#resultado > div");
        if(resultadoDiv){
            resultadoDiv.remove();
        }
        let datos = resultado[crypto][moneda];
        console.log(datos);
        let actualizacion = new Date(datos.LASTUPDATE *1000).toLocaleDateString('es-CO');
        let html =`
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${crypto} a moneda ${moneda}, es de: ${datos.PRICE.toFixed(2)}</p>
                    <p>Variacion ultimo dia: %${datos.CHANGEPCTDAY.toFixed(2)}</p>
                    <p>Ultima actualizacion: ${actualizacion}</p>
                </div>
            </div>
        `;

        this.mostrarOcultarSpinner('block');
        setTimeout(()=>{
            document.querySelector("#resultado").innerHTML = html;
            this.mostrarOcultarSpinner('none');
        },3000);
        
    }


    //spinner
    mostrarOcultarSpinner(orden){
        const spinner = document.querySelector(".contenido-spinner");
        spinner.style.display = orden;

    }

}