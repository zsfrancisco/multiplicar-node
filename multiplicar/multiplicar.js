const fs = require('fs');
const colors = require('colors');


let data = '';


let listarTabla = (base, limite) => {

    console.log('============================'.green);
    console.log(`=========Tabla de ${ base }=========`.green);
    console.log('============================'.green);


    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base}, o ${limite} no es un número`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${i * base} \n`;
        }
        resolve(`${data}`);
    });

}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base}, o ${limite} no es un número`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};