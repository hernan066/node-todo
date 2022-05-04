require('colors');

const { inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');

console.clear();

const main = async() => {
    
   
   let opt = '';
    
   do {
        
         // Imprimir el menú
         opt = await inquirerMenu();
        
        console.log({opt});
        
        await pausa();
   
    } while (opt !== '0');
}

main();