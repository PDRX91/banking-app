exports.getTasks = (req, res) => {
  res.json({ tasks: `THIS IS YO TASK, ${req.params.userId}` });
};
