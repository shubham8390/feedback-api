let feedbacks = [
  { id: 1, name: 'Alice', email: 'alice@example.com', message: 'Great app!', status: 'pending' },
  { id: 2, name: 'Bob', email: 'bob@example.com', message: 'Needs improvement.', status: 'pending' },
  { id: 3, name: 'Carol', email: 'carol@example.com', message: 'I love it!', status: 'resolved' },
  { id: 4, name: 'David', email: 'david@example.com', message: 'Found a bug.', status: 'pending' },
  { id: 5, name: 'Eve', email: 'eve@example.com', message: 'Feature request.', status: 'archived' },
];

module.exports = {
  getAllFeedbacks: () => feedbacks,
  updateStatus: (id, status) => {
    const feedback = feedbacks.find(f => f.id === id);
    if (!feedback) return null;
    feedback.status = status;
    return feedback;
  },
   addFeedback({ name, email, message }) {
  const newFeedback = {
    id: feedbacks.length + 1,
    name,
    email,
    message,
    status: 'pending',
  };
  feedbacks.push(newFeedback);
  return newFeedback;
}

};
