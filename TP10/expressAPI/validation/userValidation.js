const Joi = require("joi")

const joiOptions = {
    allowUnknown: true,
  };

const userValidationSchema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email()
}).options(joiOptions);

module.exports = userValidationSchema