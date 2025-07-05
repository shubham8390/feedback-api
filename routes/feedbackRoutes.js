const express = require('express');
const router = express.Router();
const feedbackController = require('../Controllers/feedbackController');

router.get('/', feedbackController.getFeedbacks);
router.patch('/:id/status', feedbackController.updateFeedbackStatus);
router.post('/summary', feedbackController.getFeedbacksSummary);
router.post('/add', feedbackController.addFeedback); // ✅ Insert route

module.exports = router;
