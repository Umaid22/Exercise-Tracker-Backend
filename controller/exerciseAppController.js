import AppUser from '../model/AppUserSchema.js';
import { userLoginValidations } from '../validations/userLoginValidation.js';
// import jwt from ''

const createUser = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    console.log(`Data1 fom client is :: ""${req.body}""`);

    const validation = userLoginValidations(req.body);
    const {error} = validation;
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    
    const userExitCheck = await AppUser.findOne({email: req.body.email})
    if (userExitCheck) {
        res.status(400).send(`User with email ${req.body.email} already exists`)
    } 

    const { name, email, password } = req.body;
    const user = await new AppUser({ 
        name,
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
    console.log(await req.params.id, );
    return res.send(await AppUser.findById(req.params.id))
    // return res.send(await AppUser.findObe({_id: req.params.id}))
}

const deleteUser = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"", method :: ""${req.method}""`);
    console.log(await req.params.id, );
    return res.send(await AppUser.findOneAndDelete({_id:req.params.id}))

}

const updateUser = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"", method :: ""${req.method}""`);
    console.log(await req.params.id );

    const validation = userLoginValidations(req.body);
    const {error} = validation;
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    const updatedData = req.body;
    const user = await AppUser.findOneAndUpdate({_id: req.params.id}, updatedData, {new:true}
    )
    return res.send(user).status(200)
}


export {createUser, getUserUsingPostReq, getAllUsers, getUserUsingParam, deleteUser, updateUser};
