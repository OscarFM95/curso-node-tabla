//El archivo principal generalmente se llama app o index y esá en la raíz del proyecto



const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');


//Con yargs tenemos la opción de guardar argumentos desde consola
    //Si no ponemos nada por ejemplo --listar nos guardar listar: true
    //Si le pasamos valores, nos va a a guardar el valor, por ejemplo: --base=5 nos guarda base=5 (como numero el 5)
    //para acceder a los valores, podemos usar argv.base por ejemplo (argv es el nombre que le pusimos arriba pero se puede poner yargs)



console.clear();




// console.log( process.argv );
// console.log( argv ); //para ver los argumentos que pasamos

// console.log("base: yargs", argv.base);


//Desestructurar argumentos (NO SE RECOMIENDA HACER DE ESTA FORMA PERO SIRVE PARA VER DONDE SE ALMACENAN LAS VARIABLES DE CONSOLA)
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

//Variables y constantes
// const base = 5;


crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, "creado") )
    .catch( err => console.log(err));



