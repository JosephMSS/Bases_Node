const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true, // establece la variable como requerida
      describe:'Es la base de la tabla de multiplicar'
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: true, // establece la variable como requerida
      default: 10,
      describe:'Es el limite de la tabla de multiplicar'
    },
    l: {
      alias: "list",
      type: "boolean",
      default: false,
      describe:'Muestra en consola la tabla de multiplicar'

    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;
module.exports=argv