// import conn from '../configs/connectDb';

// let addStudent = async(req, res) => {
//     let dataUser = req.body;
//         var sql = "INSERT INTO student (name, email, class) VALUES ?";
//         var values = [
//             [`${dataUser['name']}`, `${dataUser['email']}`, `${dataUser['class']}`],
//         ];
//         const result = await conn.query(sql, [values]);
//         return result;
    
// }
// module.exports = {
//     createStudent
// }