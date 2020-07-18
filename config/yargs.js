
const descripcion = {
    demand: true,
    alias: 'd',
}
const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completa la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea las tareas', {
        descripcion
    })
    .command('actualizar', 'Actualiza las tareas creadas', {
        descripcion,
        completado

    }).command('borrar', 'borra las tareas', {
        descripcion
    })
    .help().argv

module.exports = {
    argv
}