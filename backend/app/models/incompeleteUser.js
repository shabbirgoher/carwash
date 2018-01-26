import mongoose, { Schema } from 'mongoose';

var incompleteUser = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
    userName: String,
    facebook: {
        type: String,
        unique: true
    },
    google: {
        type: String,
        unique: true
    }
});

export default mongoose.model('incompleteUser', incompleteUser);