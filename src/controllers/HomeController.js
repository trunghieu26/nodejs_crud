import conn from '../configs/connectDb';
import {addStudent, getListStudent, destroyStudent, getDetailStudent, updateStudent} from '../models/HomeModel';

let getHomePage = async (req, res) => {
    //logic
    getListStudent()
        .then(result => {
            return res.render('index.ejs', {dataUser: result})
        })
        .catch(err => {
            console.log(err)
        })
    
}
let getDetailPage = async (req, res) => {
}

let editStudent = async (req, res) => {
    let id = req.params.userId;
    if(req.method == 'GET') {
        getDetailStudent(id)
            .then(result => {
                return res.render('edit.ejs', {dataUser: result})
            })
            .catch(err => {
                console.log(err)
            })
    } 
    else {
        let dataUser = req.body;
        updateStudent(dataUser,id)
            .then(result => {
                return res.redirect('/')
            })
            .catch(err => {
                console.log(err)
            })
        
    }
}
let createStudent = async (req, res) => {
    if(req.method == 'GET') return res.render('create.ejs')
    else {
        let dataUser = req.body;
        addStudent(dataUser)
            .then(result => {
                return res.redirect('/')
            })
            .catch(err => {
                console.log(err)
            })
    } 
}
let deleteStudent = (req, res) => {
    let id = req.params.userId;
    destroyStudent(id)
        .then(result => {
            return res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}
module.exports = {
    getHomePage, getDetailPage, deleteStudent, createStudent, editStudent
}