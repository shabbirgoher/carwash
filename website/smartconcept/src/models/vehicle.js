function isAlphanumeric(value) {
    var letters = /^[0-9a-zA-Z\s]+$/;
    return value.match(letters);
}

function isNone(value) {
    return value === 'None';
}

const Vehicle = {
    carBrand: 'None',
    carBrandError: '',
    carModel: '',
    carModelError: '',
    carType: 'None',
    carTypeError: '',
    licenceNo: '',
    licenceNoError: '',
    carColor: '',
    carColorError: '',
    validate: function () {
        return this.validateCarBrand()
            && this.validateCarModel()
            && this.validateCarType()
            && this.validateLicenceNo()
            && this.validateCarColor();
    },
    validateCarBrand: function () {
        if (isNone(this.carBrand)) {
            this.carBrandError = 'Please select your car brand';
            return false;
        }
        this.carBrandError = '';
        return true;
    },
    validateCarModel: function () {
        if (!isAlphanumeric(this.carModel)) {
            this.carModelError = 'Please enter a alpha numeric car model.';
            return false;
        }
        this.carModelError = '';
        return true;
    },
    validateCarType: function () {
        if (isNone(this.carType)) {
            this.carTypeError = 'Please select your car type';
            return false;
        }
        this.carTypeError = '';
        return true;
    },
    validateLicenceNo: function () {
        if (!isAlphanumeric(this.licenceNo)) {
            this.licenceNoError = 'Please enter a alpha numeric licence number.';
            return false;
        }
        this.licenceNoError = '';
        return true;
    },
    validateCarColor: function () {
        if (!isAlphanumeric(this.carColor)) {
            this.carColorError = 'Please enter a alpha numeric car colour.';
            return false;
        }
        this.carColorError = '';
        return true;
    }
}

export default Vehicle;