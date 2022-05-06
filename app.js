require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    
   
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ) { // cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

   await pausa();
    
   do {
        
         // Imprimir el menú
         opt = await inquirerMenu();
        
       switch (opt) {
           case '1':
               //crear opción
               const desc = await leerInput('Descripción:');
               tareas.crearTarea(desc);
            break;
           
            case '2':
            tareas.listadoCompleto();
            break;
       
          
       }

        //guardarDB(tareas.listadoArr);
        await pausa();
   
    } while (opt !== '0');
}

main();