import conn from '../configs/connectDb';

let addStudent = (data) => {
    return new Promise ((resolve, reject) => {
        var sql = "INSERT INTO student (name, email, class) VALUES ?";
        var values = [
            [`${data['name']}`, `${data['email']}`, `${data['class']}`],
        ];
        conn.query(sql, [values] ,function(err, results) {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}
let getListStudent = () => {
    return new Promise((resolve, reject)=>{
        let data = [];
        let sql = "SELECT * FROM student";
        conn.query(sql, function(err, results) {
            if (err) {
                return reject(err)
            };
            data = results.map((row) => {
                return {
                    id : row.id,
                    name : row.name,
                    email : row.email,
                    class : row.class      
                } 
            });
            return resolve(data)
        })
    })
    
}
const getDetailStudent = (id) => {
    return new Promise((resolve, reject)=>{
        conn.query('SELECT * FROM student WHERE id = ?', [id],
            function(error, row, fields) {
                if (!error) {
                    return resolve(row[0])
                }
                else {
                    return reject(error)
                }
            });
    })
}
let updateStudent = (dataUser, id) => {
    return new Promise((resolve, reject)=>{
        conn.query(`UPDATE student SET name='${dataUser['name']}', email ='${dataUser['email']}', class ='${dataUser['class']}' WHERE id = ?`, [id],
        function(error, row, fields) {
            if (!error) {
                return resolve(row)
            }
            else {
                return reject(err)
            }
        })
    });
}
let destroyStudent = (id) => {
    return new Promise ((resolve, reject) => {
        conn.query('DELETE FROM student WHERE id = ?', [id],
        function(error, rows, fields) {
            if (!error) {
                console.log('Successful deleted!! \n');
                return  resolve(true)
            }
            else {
                return reject(err)
            }
        });
    })
}
module.exports = {
    addStudent, getListStudent, destroyStudent, getDetailStudent, updateStudent
} 