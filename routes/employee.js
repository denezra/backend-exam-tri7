const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");
const authenticate = require("../middleware/authenticate");

router.use(authenticate);

router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
