
const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")
const Employee = require("../models/employee")
const ErrorHandler = require("../utils/ErrorHandlers")

 const createEmployee = catchAsyncErrors(async (req, res, next) => {
  try {
    const {
      employeeId,
      employeeName,
      designation,
      joiningDate,
      dateOfBirth,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    } = req.body;

    const newEmployee = new Employee({
      employeeId,
      employeeName,
      designation,
      joiningDate,
      dateOfBirth,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    });


    await newEmployee.save()

    res.status(201).json({
        message:"success",
        employee :newEmployee
    })

  } catch (error) {
    next(new ErrorHandler(error.message, 400));
  }
});


 const getAllEmployee = catchAsyncErrors(async(req,res,next)=>{
    try {
            const allEmployee = await Employee.find()
            res.status(200).json({
                status:"success",
                employee:allEmployee,
            })
    } catch (error) {
        next(new ErrorHandler(error.message, 400));
    }
})


module.exports = {createEmployee,getAllEmployee}