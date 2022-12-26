import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // default: 'this is default value',
    },
    password: {
        type: String,
        required: true,
        // minlength: 8,
        // maxlength: 64
    },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
},
{
    timestamps: true
})

export default new mongoose.model('AppUser', UserSchema); 
