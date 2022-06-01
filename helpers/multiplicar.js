const fs = require('fs'); //Importamos File System (fs) (ver documentación)
const colors  = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    //Para hacerlo con return new Promise = ((resolve, reject)=>{}) tenemos que poner solo al final resolve en lugar de return


    try {
        
        
        let salida = '';  //Hacer salida, consola nos da un undefined
        let consola = '';
    
        for ( let i = 1; i <= hasta; i++) {
            salida += `${base} x ${ i } = ${ base * i} \n`;
            consola += `${colors.green(base, " x", i, "=", " " )}${ colors.brightRed( base * i ) }\n`;
        }
        if( listar ){
            console.log("============================".green);
            console.log('        TABLA DEL: '.green, colors.brightRed(base));
            console.log("============================".green);
            console.log(consola);
        }
        
        //Tendríamos que ponerlo en un try catch pero para fines prácticos lo vamos a dejar así
        fs.writeFileSync( `./salida/tabla-${ base }-.txt`, salida ); //También está el writeFile, pero tiene un tercer parámetro que es un callback
        
        return(`tabla-${ base }.txt`)
    } catch (error) {
        throw error;
    }

}


module.exports = {
    crearArchivo //equivalente a crearArchivo: crearArchivo
}