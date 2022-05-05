require('colors');

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
               console.log(tareas._listado)
            break;
       
          
       }

        
        await pausa();
   
    } while (opt !== '0');
}

main();