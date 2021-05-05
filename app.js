const { multiply } = require("./helpers/multiply");
const argv= require('./configs/yargs')
const colors = require('colors');

const base = argv.b;
const limit = argv.h;
const list = argv.l;
multiply(base, limit, list)
  .then((data) => {
    console.log(data.green);
  })
  .catch((err) => {
    console.log(err);
  });
