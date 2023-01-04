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
    // console.log("hitted by single activity");
    // console.log("params to be search is ", req.params.activityname);

    console.log("get data email 1 ", req.params.activityname, "  ::: ", emailForData);
    let singleData = await UserActivity.find({
        useremail: emailForData, activityType:req.params.activityname
    });
    // console.log("this is single data ::: ", singleData);
    return res.status(200).send(singleData);

    // return res.send(allData)
    // return res.send(JSON.stringify("ok"))
}

const updateActivity = async (req, res) => {
    // console.log(`API hit from :: ""${req.url}"" , method :: ""${req.method}""`);
    // console.log(`Data fom client is :: ""${req}""`);
    // console.log(req.body);

    const { description, activityType, duration, date, useremail, _id } = req.body;
    console.log(description, activityType, duration, date, useremail, _id);
    try{

        const activity = await UserActivity.updateOne({_id:_id}, {
            $set:{
                description,
                activityType,
                duration,
                date,
            }   
        }
        //  function(err, success){
            //     if(err){
                //         console.log(err);
                //         return res.status(500).send(err);        
                //     }
                //     if(success){
                    //         return res.status(200).send(activity);
                    //     }
                    // }
                    );
                    console.log(activity);
                    return res.status(200).send(activity);
    }catch(err){
        console.log(err);
    }

    // return res.status(200).send(JSON.stringify(req.body));
}

const deleteActivity = async (req, res) => {
    const id = req.body.idDelete
    // console.log(req.body.idDelete);
    try{
        const deleteResult = await UserActivity.deleteOne({_id:id});
                    console.log(deleteResult);
                    return res.status(200).send(deleteResult);
    }catch(err){
        console.log(err);
    }
}

export { createActivity, getAllActivity, getSingleActivity, updateActivity, deleteActivity }