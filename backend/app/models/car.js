import mongoose, { Schema } from 'mongoose';

var Car = new Schema({
    carId: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    carBrand: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    carType: {
        type: String,
        required: true
    },
    licenceNo: {
        type: String,
        required: true
    },
    carColor: {
        type: String,
        required: true
    }
});
Car.index({userId: 1, licenceNo: 1}, {unique: true});

export default mongoose.model('cars', Car);