exports.use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

function use(fn) {
  return function (req, res, next) {
    return Promise.resolve(fn(req, res)).catch(next);
  };
}
