import mongoose from "mongoose";

const UserActivitySchema = new mongoose.Schema({
    description: {
        type: String,
    },
    activityType: {
        type: String,
        required: true,
        // default: 'this is default value',
    },
    duration: {
        type: Number,
        required: true,
        // minlength: 8,
        // maxlength: 64
    },
    date:{
        type: Date,
        required: true
    },
    useremail:{
        type: String,
        require: true
    }
},
{
    timestamps: true
})

export default new mongoose.model('UserActivity', UserActivitySchema); 
