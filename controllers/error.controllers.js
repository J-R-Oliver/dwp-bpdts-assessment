exports.handle404 = (req, res) => {
  res.status(404).send({ msg: 'Not Found' });
};

// eslint-disable-next-line no-unused-vars
exports.handleInternalErrors = (err, req, res, next) => {
  res.status(500).send({ msg: 'Internal Server Error' });
};

exports.handleUnsupportedMethods = (req, res) => {
  res.status(405).send({ msg: 'Method Not Allowed' });
};
