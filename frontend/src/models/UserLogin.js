
export class UserLogin {
    constructor() {
        this.email = { value: "", isTouched: false, isSuccess: false };
        this.password = { value: "", isTouched: false, isSuccess: false };
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
            this.email.isSuccess &&
            this.password.isSuccess 
        );
    }

    toJSON() {
        return {
            email: this.email.value,
            password: this.password.value
        };
    }
}
