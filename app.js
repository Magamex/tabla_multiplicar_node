const { tabla } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

require('colors');

console.clear()

// const [,,arg3 = 'base=5'] = process.argv
// const [,base] = arg3.split('=')

tabla(argv.b,argv.l,argv.h)
    .then(msg => console.log(msg.green))
    .catch(err => console.log(err.red))