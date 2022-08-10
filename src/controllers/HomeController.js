import conn from '../configs/connectDb';

let getHomePage = (req, res) => {
    //logic 
    let data = [];
    
    var sql = "SELECT * FROM student";
    conn.query(sql, function(err, results) {
        if (err) throw err;
        data = results.map((row) => {
            return {
                id : row.id,
                name : row.name,
                email : row.email,
                class : row.class      
            } 
        });
        return res.render('index.ejs', {dataUser: (data)})
    })

}
let getDetailPage = async (req, res) => {
}
let editStudent = async (req, res) => {
    let id = req.params.userId;
    if(req.method == 'GET') {
        conn.query('SELECT * FROM student WHERE id = ?', [id],
        function(error, row, fields) {
            if (!error) {
                return res.render('edit.ejs', {dataUser: row[0]})
            }
            else {
                console.log('Error in deleting');
            }
        }); 
    } 
    else {
        let dataUser = req.body;
        console.log(req);
        conn.query(`UPDATE student SET name='${dataUser['name']}', email ='${dataUser['email']}', class ='${dataUser['class']}' WHERE id = ?`, [id],
        function(error, row, fields) {
            if (!error) {
                return res.redirect('/')
            }
            else {
                console.log('Error in deleting');
            }
        });      
    }
}
let createStudent = async (req, res) => {
    if(req.method == 'GET') return res.render('create.ejs')
    else {
        let dataUser = req.body;
        var sql = "INSERT INTO student (name, email, class) VALUES ?";
        var values = [
            [`${dataUser['name']}`, `${dataUser['email']}`, `${dataUser['class']}`],
        ];
        const result = await conn.query(sql, [values]);
        return res.redirect('/')
    } 
}
let deleteStudent = (req, res) => {
    var id = req.params.userId;
    conn.query('DELETE FROM student WHERE id = ?', [id],
        function(error, rows, fields) {
            if (!error) {
                console.log('Successful deleted!! \n');
                return  res.redirect('/')
            }
            else {
                console.log('Error in deleting');
            }
        });
}
module.exports = {
    getHomePage, getDetailPage, deleteStudent, createStudent, editStudent
}