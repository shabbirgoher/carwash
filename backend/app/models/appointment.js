import mongoose, { Schema } from 'mongoose';

var appointment = new Schema({
    appointmentId: {
        type: String,
        unique: true,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    vehicle: {
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
    },
    address: {
        cluster: {
            type: String,
            required: true
        },
        towerName: {
            type: String,
            required: true
        },
        apartment: {
            type: String,
            required: true
        },
    },
    package: {
        type: String,
        required: true
    },
    days: {
        type: Array,
        required: true
    }
});

export default mongoose.model('appointment', appointment);