
const fs = require('node:fs');
const crearArchivo = async(tabla, lista = false, hasta, entrada=10) => {
    try {
        let salida = '';


    for(i=1; i <= entrada; i++){

        salida += (`   ${tabla} x ${i} = ${tabla * i}
`); 
        if (hasta <= tabla*i){
            break;
        }
    }
    if (lista){

    
    console.log('================='.bgBlue);
    console.log(`===Tabla del ${tabla}===`.bgBlue);
    console.log('================='.bgBlue);
    console.log(salida.random);

    }

    fs.writeFileSync(`./tablas/tabla-${tabla}.txt`, salida);
    
       
    
    
    return `tabla-${tabla}.txt`;    
        

    }
    catch (err){
        throw err;
    }



}
module.exports = {
    crearArchivo
}





