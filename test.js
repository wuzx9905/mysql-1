let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',

});

connection.connect();
// CREATE TABLE IF NOT EXISTS user;

connection.query('CREATE DATABASE IF NOT EXISTS dodo DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
    if (error) throw error;
    //创建数据库
    console.log(results);
});

connection.query('use dodo;')

connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
)`, function (error, results, fields) {
    if (error) throw error;
    //创建表
    console.log(results);
});

connection.end();