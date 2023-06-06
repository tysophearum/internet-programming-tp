const checkAuthenticationGetIn = (req, res, next) => {
    if (req.session.jwt) {
      // User is logged in, allow access to the next middleware or route handler
      res.status(401).json({ mssage : 'Unauthorized' });
    } else {
      next();
      // User is not logged in, redirect or send an error response
    }
};



module.exports = checkAuthenticationGetIn