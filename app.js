const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

const argv = require('./config/yargs').argv

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (const tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('======================'.green);
        }
        console.log('listar tareas');

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        console.log(argv.descripcion);
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log('Error en el comando');

        break;
}