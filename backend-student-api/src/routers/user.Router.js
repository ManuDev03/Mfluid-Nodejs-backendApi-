const express = require('express')
const router = express.Router()
const studentController = require('../controller/student.Controller');


router.route('/students')
.post(studentController.postStudent)
.get(studentController.getStudents);

router.route('/students/:studentId')
.get(studentController.getStudentById)
.put(studentController.updateStudentById)
.delete(studentController.deleteStudentById);




module.exports = router