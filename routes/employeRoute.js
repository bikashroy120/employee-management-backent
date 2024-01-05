const express = require("express");
const { createEmployee, getAllEmployee } = require("../controllor/employeControllor");

const router = express.Router()

router.post("/employee/create",createEmployee)
router.get("/employee",getAllEmployee)

module.exports = router;