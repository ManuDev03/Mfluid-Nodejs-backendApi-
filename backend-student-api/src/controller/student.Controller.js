const Student = require('../models/student.Models')
const postStudent = async(request,response)=>{
    console.log(`Input Received: ${JSON.stringify(request.body)}`);
    const student = new Student({
        name: request.body.name,
        marks: request.body.marks,
        class: request.body.class,
        department: request.body.department,
    })
    try {
        await student.save()
        return response.status(201).json(student);

    } catch (error) {
        return response.status(500).json(error);
    }
    
}
const getStudents = async(request,response)=>{

    try {
        const student = await Student.find()
        response.status(201).json(student);
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}
const getStudentById = async(request,response)=>{
    try {
        const student = await Student.findById(request.params.studentId)
        response.status(201).json(student);
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}
const updateStudentById = async(request,response)=>{
    try {
        const student = await Student.findByIdAndUpdate(request.params.studentId,request.body,{new:true})
        response.status(201).json(student);
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}
const deleteStudentById = async(request,response)=>{
    try {

        const student = await Student.findByIdAndDelete(request.params.studentId)
        response.status(201).json(student);
    }
    catch(error)
    {
        response.status(500).json(error);
    }
}


module.exports = {
    postStudent,
    getStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById
    
  };