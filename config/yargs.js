const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Base del multiplicador',
        type: 'number'
    })
    .option('l',{
        alias: 'listar',
        describe: 'Visualizar la tabla',
        default: false,
        type: 'boolean'
    })
    .option('h',{
        alias: 'hasta',
        describe: 'Limite de la tabla',
        default: 10,
        type: 'number'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'Base tiene que ser un numero'
        }
        if(isNaN(argv.h)){
            throw 'Hasta tiene que ser un numero'
        }
        return true
    })
    .argv

module.exports = {
    argv
}