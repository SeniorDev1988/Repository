export const validationEnum = Object.freeze({
    EMAIL: 'email',
    PASSWORD: 'password',
    TEXT: 'text',
    NUMBER: 'number',
    TELL: 'tell',
    ZIP: 'zip',
    ADDRESS: 'address',
    CHECKNULL: 'checknull'
});

export const validate = (format, value, minLen = null, maxLen = null) => {
    switch (format) {
        case validationEnum.EMAIL:
            return String(value)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        case validationEnum.PASSWORD:
            return String(value)
                .match(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
                );
        case validationEnum.TEXT: {
            const textRegex = new RegExp(`^[a-zA-Z]{${minLen},${maxLen}}$`);
            return textRegex.test(String(value));
        }
         case validationEnum.CHECKNULL: {
            if (value === null || value === undefined || value === '') {
                return false;
            }
            return true;
        }
        default: {
            // Return false or handle unknown format as needed
            return false;
        }
    }

};

