import mongoose, { Schema } from 'mongoose';

var incompleteUser = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    userName: String,
    facebookId: {
        type: String,
        unique: true
    },
    googleId: {
        type: String,
        unique: true
    }
});

export default mongoose.model('incompleteUser', incompleteUser);