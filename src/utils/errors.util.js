const ERRORS_NAME = [
    'ExpiredEmailConfirmError',
    'ExpiredTokenConfirmError',
    'ConflictError',
    'Forbidden',
    'PermissionError',
    'InputValidationError',
    'InvalidEmailConfirmError',
    'InvalidPasswordError',
    'UnauthorizedError'
];

const ErrorsUtil = ERRORS_NAME.reduce((acc, className) => {
    acc[className] = ({
        [className]: class extends Error {
            constructor(msg, status) {
                super();
                this.message = msg;
                this.status = status;
                this.name = className;
            }
        }
    })[className];

    return acc;
}, {});

export default ErrorsUtil;