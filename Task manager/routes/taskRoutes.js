const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const taskCtrl = require('../controllers/taskController');

router.use(auth);
router.get('/', taskCtrl.getTasks);
router.get('/schedule', taskCtrl.getScheduledTasks);
router.post('/', taskCtrl.createTask);
router.put('/:id', taskCtrl.updateTask);
router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;