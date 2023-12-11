const {Student} = require("../db")

const createStudent = async (req,res) => {
     try {

      const  {nota1,nota2,nota3,nota4} = req.body
      const promedio = (nota1 + nota2 + nota3 + nota4)/4
        const newStudent = await Student.create({...req.body, promedio})
        res.json(newStudent)
        console.log(newStudent)
        
     } catch (error) {
        res.status(400).json({error:error.message})
     }
     
}


const getStudents = async (req,res) => {
   try {
      const students = await Student.findAll()
      console.log("get prom", students)
      res.json(students)
   } catch (error) { 
      res.status(400).json({error:error.message})
   }
}

const updateStudent = async (req,res) => {
   try {
      const student = await Student.findByPk(req.params.id)
      const  {nota1,nota2,nota3,nota4} = req.body
      const promedio = (nota1 + nota2 + nota3 + nota4)/4
      console.log("el promiedazo",promedio)
      if (student) {
         await student.update({...req.body,promedio}) 
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
// const promedio = async(req,res) => {

//    try {
      
//       const  {nota1,nota2,nota3,nota4} = req.body
//       const promedio = (nota1 + nota2 + nota3 + nota4)/4
//    } catch (error) {
//       res.status(400).json({error:error.message})
//    }
// }


module.exports = {
   createStudent, getStudents, updateStudent, deleteStudent
}


