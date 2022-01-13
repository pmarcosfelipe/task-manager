const getTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
};
