// middlewares/authMiddleware.js
module.exports = function(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.redirect('/login');
  }
  next();
};
