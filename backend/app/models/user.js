import mongoose, { Schema } from 'mongoose';

var user = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    userName: String,
    facebookId: {
        type: String,
        unique: true
    },
    googleId: {
        type: String,
        unique: true
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