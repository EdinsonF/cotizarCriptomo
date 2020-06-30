class API{
    constructor(apiKey){
        this.apiKey=apiKey;
    }

    async obtenerMonedas(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
        //conectamos
        const urlMonedas = await fetch(url);
        //pbtenemos datos
        const monedas = await urlMonedas.json();
        
        return{
            monedas
        }
        
    }


    //consultar converitidos
    async consultarMonedas(moneda, criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;
        //conectamos
        const urlMonedas = await fetch(url);
        //pbtenemos datos
        const resultado = await urlMonedas.json();
        
        return{
            resultado
        }
        
    }
}