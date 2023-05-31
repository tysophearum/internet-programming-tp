const checkAuthenticationUsing = (req, res, next) => {
    if (req.session.jwt) {
      // User is logged in, allow access to the next middleware or route handler
      next();
    } else {
      // User is not logged in, redirect or send an error response
      res.status(401).send('Unauthorized');
    }
};



module.exports = checkAuthenticationUsing