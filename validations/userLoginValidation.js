import joi from "joi";

const userLoginValidations = (data) =>{

    const schema = joi.object({
        email: joi.string().required().min(4),
        password: joi.string().required(),
    })

    return schema.validate(data);

}

export {userLoginValidations}