import joi from "joi";

const userSignupValidations = (data) =>{

    const schema = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        // email: joi.string().required().min(4),
        password: joi.string().required(),
    })
    return schema.validate(data);
}

// const userUpdatValidations = (data) =>{

//     const schema = joi.object({
//         email: joi.string().required().min(4),
//         password: joi.string().required(),
//     })
//     return schema.validate(data);
// }

export {userSignupValidations}
