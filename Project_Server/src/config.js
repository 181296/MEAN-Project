const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DB_CONFIG =  {host: "localhost",
                    user: "root",
                    password: "root",
                    database: "sample"
                };

module.exports = {DB_CONFIG};