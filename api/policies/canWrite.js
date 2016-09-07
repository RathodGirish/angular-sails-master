module.exports = function canWrite (req, res, next) {
  if(true) {
    return next();
  }
  else {
    return res.send("No creation for you!", 403);
  }
};
