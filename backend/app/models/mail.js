import mongoose, { Schema } from 'mongoose';

var email = new Schema({
    mailId: {
        type: String,
        unique: true,
        required: true
    },
    emailAddr: {
        type: String,
        required: true
    },
    emailType: {
        type: String,
        required: true
    },
    emailStatus: {
        type: String,
        required: true
    },
    emailResponse: {
        type: String
    }
});

export default mongoose.model('email', email);