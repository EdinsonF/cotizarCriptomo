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

}