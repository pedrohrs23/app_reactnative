import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1704',
    database: 'rootDBreact'
});
