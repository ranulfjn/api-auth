const joi = require('joi');


const schema =  {

    name:   joi.string().
            joi.max(255).
            joi.required(),
    email:  joi.string().
            joi.min(6).
            joi.required(),
    password:   joi.string().
                joi.max(6).
                joi.required(),

}


module.exports= schema;