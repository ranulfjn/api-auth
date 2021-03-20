const Joi = require('joi');


const schema = Joi.object ({

    name:   Joi.string()
            .max(255)
            .required(),
    email:  Joi.string()
            .min(6)
            .required()
            .email(),
    password:   Joi.string()
                .min(6)
                .required(),

})


module.exports= schema;