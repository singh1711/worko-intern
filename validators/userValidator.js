const Joi = require('joi');

exports.validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        age: Joi.number().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required()
    });
    return schema.validate(user);
};
