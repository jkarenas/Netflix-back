const express = require("express")
const { createStudent, getStudents,updateStudent, deleteStudent } = require("../controlllers/crud")

const router = express.Router()

router.post("/create", createStudent)
router.get("/read", getStudents)
router.put("/update/:id", updateStudent)
router.delete("/delete/:id", deleteStudent)
module.exports = router