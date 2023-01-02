import AppUser from '../model/AppUserSchema.js';
import { userSignupValidations } from '../validations/userLoginValidation.js';
// import jwt from ''

const createUser = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    // console.log(`Data fom client is :: ""${req}""`);
    console.log(req.body);

    const validation = userSignupValidations(req.body);
    const {error} = validation;
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    
    const userExitCheck = await AppUser.findOne({email: req.body.email})
    if (userExitCheck) {
        // console.log(error);
        return res.status(400).json({message:"User already exists"});
        // res.status(400).send(`User with email ${req.body.email} already exists`)
    } 

    const { name, email, password } = req.body;
    const user = await new AppUser({ 
        name,
        email,
        password
    }).save();
    return res.status(200).send(user);
    // res.status(200).send(req.body);
}

const getUserUsingPostReq = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    const checkUser = await AppUser.findOne({email: req.body.email});
    if(!checkUser){
        return res.status(404).json({message:"User not found"});
    }
    if (checkUser) {
        if(checkUser.password !== req.body.password){
            return res.status(404).json({message:"Password incorrect"});
        }
        console.log(checkUser);
        return res.send(checkUser)
    }
}

const getAllUsers = async (req, res) => {
    // console.log(`API hit from :: ""${}"", method :: ""${req.method}""`);
    // console.log(`""header are "" ::${req.header("userEmail")}`);
    let email = req.header("userEmail");
    console.log(email);
    // res.send("ok")
    return res.send(await AppUser.findOne({email:email}))
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
