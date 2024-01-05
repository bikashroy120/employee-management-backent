const express = require("express");
const { createEmployee } = require("../controllor/employeControllor");

const router = express.Router()

router.post("employee/create",createEmployee)

module.exports = router;