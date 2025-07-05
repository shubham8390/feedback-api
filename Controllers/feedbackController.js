const Feedback = require('../models/feedbackModel');
const { summarizeFeedback } = require('../summarizeFeedback');

exports.getFeedbacks = (req, res) => {
  const data = Feedback.getAllFeedbacks();
  res.json(data);
};

exports.updateFeedbackStatus = (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  if (!['pending', 'resolved', 'archived'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  const updated = Feedback.updateStatus(id, status);
  if (!updated) {
    return res.status(404).json({ error: 'Feedback not found' });
  }

  res.json({ message: 'Status updated', feedback: updated });
};


exports.getFeedbacksSummary = async (req, res) => {
  const data = await summarizeFeedback(req.body);
  res.json(data);
};

exports.addFeedback = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const newFeedback = Feedback.addFeedback({ name, email, message });
  res.status(201).json({ message: 'Feedback submitted', feedback: newFeedback });
};