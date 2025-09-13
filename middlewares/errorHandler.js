// middlewares/errorHandler.js
module.exports = function(err, req, res, next) {
  console.error(err.stack);
  // agar view based, render error page
  res.status(500).send('Something broke!');  
  // ya res.render('error', { error: err });
};
