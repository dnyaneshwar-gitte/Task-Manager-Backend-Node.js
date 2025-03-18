const Task = require('../models/Task');
const MinHeap = require('../utils/priorityQueue');
const cache = new Map();

exports.getTasks = async (req, res) => {
  const { status, priority, page = 1, limit = 5 } = req.query;
  const cacheKey = `${req.userId}:${status}:${priority}:${page}`;

  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  const query = { user: req.userId };
  if (status) query.status = status;
  if (priority) query.priority = priority;

  const tasks = await Task.find(query)
    .skip((page - 1) * limit)
    .limit(+limit)
    .sort({ createdAt: -1 });

  cache.set(cacheKey, tasks);
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description, status, priority } = req.body;
  const task = new Task({ title, description, status, priority, user: req.userId });
  await task.save();
  cache.clear();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id, user: req.userId }, req.body, { new: true });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  cache.clear();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  cache.clear();
  res.json({ message: 'Task deleted' });
};

exports.getScheduledTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  const heap = new MinHeap();
  tasks.forEach(task => heap.insert(task));

  const sortedTasks = [];
  while (heap.heap.length) {
    sortedTasks.push(heap.extractMin());
  }
  res.json(sortedTasks);
};