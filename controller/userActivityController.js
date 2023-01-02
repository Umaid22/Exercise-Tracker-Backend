import UserActivity from "../model/UserActivitySchema.js";

const createActivity = async (req, res) => {
    // console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    // console.log(`Data fom client is :: ""${req}""`);
    // console.log(req.body);

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
    let emailForData = req.header("userEmail");
    // console.log("get data email 1 ", emailForData);
    // let allData = await UserActivity.find({useremail:emailForData});
    // console.log("this is all data", allData);
    // res.send(allData)

    return res.send(await UserActivity.find({ useremail: emailForData }))
    // return res.send(JSON.stringify("ok"))
}


const getSingleActivity = async (req, res) => {
    let emailForData = req.header("userEmail");
    console.log("hitted by single activity");
    console.log("params to be search is ", req.params.activityname);

    // console.log("get data email 1 ", emailForData);
    let allData = await UserActivity.find({
        useremail: emailForData
    });
    console.log("this is all data", allData);
    // res.send(allData)

    return res.send(allData)
    // return res.send(JSON.stringify("ok"))
}

export { createActivity, getAllActivity, getSingleActivity }