const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

router.use(protect);
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
