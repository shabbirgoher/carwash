import mongoose, { Schema } from 'mongoose';

var user = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    emailAddr: {
        type: String,
        unique: true,
        required: true
    },
    mobileNumber: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: String,
    },
    userName: String,
    facebook: {
        type: String
    },
    google: {
        type: String
    },
    address: {
        line1: String,
        line2: String,
        line3: String,
        line4: String,
        line5: String,
        postalCode: String,
    }
});

export default mongoose.model('user', user);