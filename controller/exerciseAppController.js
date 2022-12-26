import AppUser from '../model/AppUserSchema.js';
import { userLoginValidations } from '../validations/userLoginValidation.js';

const createUser = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);

    const validation = userLoginValidations(req.body);
    const {error} = validation;
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    
    const userExitCheck = await AppUser.findOne({email: req.body.email})
    if (userExitCheck) {
        res.status(400).send(`User with email ${req.body.email} already exists`)
    } 

    const { email, password } = req.body;
    const user = await new AppUser({ 
        email,
        password
    }).save();
    return res.send(user)
}

const getUserUsingPostReq = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    return res.send(await AppUser.find({email: req.body.email}))
}

const getAllUsers = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"", method :: ""${req.method}""`);
    return res.send(await AppUser.find())
}

const getUserUsingParam = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    console.log(await req.params.id);
    return res.send(await AppUser.findOne({_id: req.params.id}))
    
}


export {createUser, getUserUsingPostReq, getAllUsers, getUserUsingParam};
