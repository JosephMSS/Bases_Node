const fs = require("fs");
const colors = require("colors");
const multiply = async (base = 1, limit = 10, list) => {
  let results = "";
  let saveResults = "";
  try {
    for (let i = 0; i <= limit; i++) {
      results += `${colors.bgBlue(base)}${colors.bgWhite.black(
        "x"
      )}${colors.bgRed.white(i)}${colors.bgWhite.black(
        "="
      )}${colors.bgBlue.white(base * i)}\n`;
      saveResults += `${base}x${i}=${base * i}\n`;
    }
    if (list) {
      console.info(results);
    }
    fs.writeFileSync(`./tmp/tabla_${base}.txt`, saveResults);
    return `tabla_${base}.txt creado`;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  multiply,
};
