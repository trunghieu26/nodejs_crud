import express from "express";
import HomeController from '../controllers/HomeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', HomeController.getHomePage);
    router.get('/create/student', HomeController.createStudent)
    router.post('/create/student', HomeController.createStudent)
    router.get('/edit/student/:userId', HomeController.editStudent)
    router.put('/edit/student/:userId', HomeController.editStudent)
    router.get('/delete/student/:userId', HomeController.deleteStudent)
    return app.use('/', router)
}

export default initWebRoute;