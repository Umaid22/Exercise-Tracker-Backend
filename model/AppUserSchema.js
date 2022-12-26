import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
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
},
{
    timestamps: true
})

export default new mongoose.model('AppUser', UserSchema); 
