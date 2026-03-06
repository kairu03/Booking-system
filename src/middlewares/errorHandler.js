
export const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || res.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server error',
    
    stack: process.env.NODE_ENV === 'development' ? err.stack : null
  });
};