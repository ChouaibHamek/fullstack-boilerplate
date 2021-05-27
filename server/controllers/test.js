exports.testController = (req, res, next) => {
  console.log('\x1b[36m%s\x1b[0m', '[REQUEST]');
  console.log({ body: req.body, route: req.route });
  res.status(200).send({ message: 'Success!' });
};