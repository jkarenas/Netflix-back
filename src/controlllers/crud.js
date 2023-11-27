const {Student} = require("../db")

const createStudent = async (req,res) => {
     try {
        const newStudent = await Student.create(req.body)
        res.json(newStudent)
     } catch (error) {
        res.status(400).json({error:error.message})
     }
}

const getStudents = async (req,res) => {
   try {
      const students = await Student.findAll()
      res.json(students)
   } catch (error) { 
      res.status(400).json({error:error.message})
   }
}

const updateStudent = async (req,res) => {
   try {
      const student = await Student.findByPk(req.params.id)
      if (student) {
         await student.update(req.body) 
         res.json(student)
      } else {
         res.status(404).json({error: `Student with id ${req.params.id} not found`})
      } 
   } catch (error) {
      res.status(400).json({error:error.message})
   }
}

const deleteStudent = async (req, res) => {
   try {
      const student = await Student.findByPk(req.params.id)
      if (student) {
         await student.destroy() 
         res.json({message: `Student with id ${req.params.id} deleted successfully`})
      } else {
         res.status(404).json({error: `Student with id ${req.params.id} not found`})
      } 
   } catch (error) {
      res.status(400).json({error:error.message})
   }
}

module.exports = {
   createStudent, getStudents, updateStudent, deleteStudent
}


