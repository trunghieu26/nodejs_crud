import mysql from 'mysql';

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hieu@1234",
    database: "crud_nodejs"
});
conn.connect( () => { console.log('database')});
export default conn;
