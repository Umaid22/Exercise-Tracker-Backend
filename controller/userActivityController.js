import UserActivity from "../model/UserActivitySchema.js";

const createActivity = async (req, res) => {
    console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    // console.log(`Data fom client is :: ""${req}""`);
    console.log(req.body);

    const { description, activityType, duration, date, useremail } = req.body;
    const activity = await new UserActivity({ 
        description,
        activityType,
        duration,
        date,
        useremail
    }).save();
    return res.status(200).send(activity);
    // res.status(200).send(req.body);
}

const getAllActivity = async (req, res) => {
    let email = req.header("userEmail");
    console.log(email);
    return res.send(await UserActivity.find({email:email}))
    // return res.send(JSON.stringify("ok"))
}

export {createActivity, getAllActivity}