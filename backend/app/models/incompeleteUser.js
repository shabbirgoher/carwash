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
    },
    google: {
        type: String,
    }
});

export default mongoose.model('incompleteUser', incompleteUser);