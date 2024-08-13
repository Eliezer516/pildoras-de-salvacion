const fs = require('fs');
const path = require('path');

// Obtener los argumentos de la línea de comandos
const args = process.argv.slice(2);

// Verificar si se proporcionó una frase
if (!args[0]) {
  console.error('Por favor, ingresa una frase como argumento.');
  process.exit(1);
}

// Obtener la frase y crear el nombre del archivo slugificado
const frase = args[0];
const nombreArchivo = slugifyManual(frase) + '.md';
const ruta = path.join(__dirname, 'src/post/', nombreArchivo)

// Crear el archivo .md
fs.writeFile(ruta, '', (err) => {
  if (err) {
    console.error('Error al crear el archivo:', err);
  } else {
    console.log(`Archivo creado: ${nombreArchivo}`);
  }
});

// Función para slugificar manualmente
function slugifyManual(text) {
  return text.toLowerCase()
             .replace(/[^\w\s-]/g, '') // Eliminar caracteres no alfanuméricos, espacios y guiones
             .replace(/[\s_-]+/g, '-') // Reemplazar espacios, guiones bajos y guiones múltiples por un solo guión
             .replace(/^-+|-+$/g, ''); // Eliminar guiones al principio y al final
}