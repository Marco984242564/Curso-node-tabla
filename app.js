
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require ('./config/yargs');
const colors = require('colors');


console.clear();



// const[,, arg3= 'tabla = 0'] = process.argv;
// const [, tabla] = arg3.split('=');






// Imprimir la tabla del 5
// tabla = 5;

  crearArchivo (argv.t, argv.l, argv.h, argv.e)
      .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
      

      .catch ( err => console.log('error'));
