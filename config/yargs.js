const { describe } = require('yargs');

const argv = require('yargs')
    .option('t',{
        alias: 'tabla',
        type: 'number',
        demandOption : true,
        describe: 'Elige el de que numero sera la tabla'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Imprime la toda la tabla'
    })
    .check( (argv, options) => {
        if (isNaN( argv.t )){
            throw 'La base tiene que ser un número'
        }
        return true;
        
    }  )
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Limita el la cantidad de multiplicaciones con un rango maximo'

    })
    .option('e',{
        alias:'entrada',
        type: 'number',
        describe :'Se elige hasta donde multiplicar la tabla'

    })


    .argv;

module.exports = argv;