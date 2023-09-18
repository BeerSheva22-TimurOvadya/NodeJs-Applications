import express from 'express';
export const employees = express.Router();
import asyncHandler from 'express-async-handler';
import EmployeesService from '../service/EmployeesService.mjs';
const employeesService = new EmployeesService();
//TODO validation schema base om Joi
employees.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = +req.params.id;
        if (!(await employeesService.deleteEmployee(id))) {
            res.status(404);
            throw `employee with id ${id} not found`;
        }
        res.send();
    }),
);
