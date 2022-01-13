const express = require('express');
const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} = require('../controllers/tasks');

router.route('/').get(getTasks);
router.route('/').post(createTask);

router.route('/:id').get(getTaskById);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;
