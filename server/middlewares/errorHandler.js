const errorHandler = (err, req, res, next) => {
  if (err.name === 'SequelizeValidationError') {
      err = err.errors.map(el => el.message)
      res.status(400).json({
          message: err
      })
  } else if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({
          message: 'Your email is already registered'
      })
  } else if (err.name === 'POST_NOT_FOUND') {
      res.status(404).json({
          message: 'Post not found'
      })
  } else {
      console.log(err)
      res.status(500).json({
          message: 'Internal Server Error'
      })
  }
}

module.exports = errorHandler