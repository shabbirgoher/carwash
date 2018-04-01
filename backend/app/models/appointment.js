import mongoose, { Schema } from 'mongoose';

var appointment = new Schema({
    appointmentId: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
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
    carId: {
        type: String,
        required: true
    },
    address: {
        building: {
            type: String,
            required: true
        },
        parkingNumber: {
            type: String,
            required: true
        },
        apartment: {
            type: String,
            required: true
        },
    },
    package: {
        packageDays: {
            type: String,
            required: true
        },
        packageDaysPerWeek: {
            type: String,
            required: true
        },
        packagePeriods: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    days: {
        type: Array,
        required: true
    }
});

export default mongoose.model('appointment', appointment);