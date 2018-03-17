import mongoose, { Schema } from 'mongoose';

var forgotPassword = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    emailAddr: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

export default mongoose.model('forgotPassword', forgotPassword);