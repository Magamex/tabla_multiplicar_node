const fs = require('fs');

const tabla = async(numBase, visualizar = false, hasta = 10)=>{
    try{
        let salida = ''
        for (let inicio = 1; inicio <= hasta; inicio++) {
            salida += (`${numBase} x ${inicio} = ${numBase*inicio}\n`)
        }
        const nomArchivo = `tabladel${numBase}.txt`;

        (visualizar)?console.log(`Tabla de ${numBase}\n`.rainbow):null;
        (visualizar)?console.log(salida.yellow):null;

        fs.writeFileSync(`./salida/${nomArchivo}`, salida)

        return `${nomArchivo}`
    }catch(err){
        throw err;
    }
}

module.exports = {
    tabla
}