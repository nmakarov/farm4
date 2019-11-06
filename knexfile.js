const conf = require("lastconf")({
  debug: true,
}).get("knex");

console.info(">> configuration:", conf);

module.exports = {
  ...conf,
};
