const argv = require('yargs')
    .option('b',{
        alias: ['Base', 'base'],
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe se un número.';
        }
        return true;
    })
    .argv;

module.exports = argv;


