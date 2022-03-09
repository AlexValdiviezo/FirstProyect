const fs = require('fs');

let tablaDeMultiplicar = '';

const multiplicar = async(base) => {
    try{
        for(let i = 1 ; i <= 10 ; i++){
            tablaDeMultiplicar += `${base} x ${i} = ${base*i}0\n`;
        }
    
        console.log(tablaDeMultiplicar);
    
        fs.writeFile(`./salida/table-${base}.txt`, tablaDeMultiplicar, (err) => {
            if(err) throw err;
        });
        return `table-${base}.txt`
    }
    catch(err){
        throw(err);
    }
}


module.exports = { multiplicar }

