// src/models/User.js
export class User {
    constructor() {
        this.firstName = { value: "", isTouched: false, isSuccess: false };
        this.lastName = { value: "", isTouched: false, isSuccess: false };
        this.email = { value: "", isTouched: false, isSuccess: false };
        this.password = { value: "", isTouched: false, isSuccess: false };
        this.role = "role"; // simple string, since no validation flags needed
    }

    // Example method to update a field
    updateField(fieldName, value, isSuccess, isTouched = true) {
        if (this[fieldName]) {
            this[fieldName] = { value, isTouched, isSuccess };
        }
    }

    // Check if all fields are successful
    get isValid() {
        return (
            this.firstName.isSuccess &&
            this.lastName.isSuccess &&
            this.email.isSuccess &&
            this.password.isSuccess &&
            this.role !== "role"
        );
    }

    toJSON() {
        return {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
            role: this.role,
        };
    }
}
