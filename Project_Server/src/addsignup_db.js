const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

/** READ BY USER PARAM
 *@param {*} user
 */

let addSignUpParam = async(user) => {
    const connect = mysql.createConnection(config.DB_CONFIG);

    await connect.connectAsync();
    let sql = "INSERT INTO SIGNUP (Mobile_No, CustName, EmailID, Password) VALUES (?, ?, ?, ?)";
    await connect.queryAsync(sql, [user.phone, user.name, user.email, user.password]);
    
    await connect.endAsync();
    console.log("Record updated....")
    return result;
};

let checkSignUpParam = async(user) => {
    const connect = mysql.createConnection(config.DB_CONFIG);
    
    await connect.connectAsync();
    console.log("database start....");
    let sql = "SELECT Mobile_No, Password FROM SIGNUP WHERE Mobile_No=? AND Password=?";
    const result = await connect.queryAsync(sql, [user.phone, user.password]);
    console.log(result);
    await connect.endAsync();
    console.log("Record checked....");
    if(result == null) {
        console.log("hey");
        return false;
    }
    else {
        console.log("hello");
        return true;
    }

};

let resetSignUpParam = async(user) => {
    const connect = mysql.createConnection(config.DB_CONFIG);
    
    await connect.connectAsync();
    //console.log("database start....");
    let sql = "UPDATE SIGNUP SET Password=? WHERE Mobile_No=?";
    let result = await connect.queryAsync(sql, [user.phone, user.password]);
    
    await connect.endAsync();
    console.log("Record upadted....");
    return result;

};



module.exports = {addSignUpParam, checkSignUpParam, resetSignUpParam};
