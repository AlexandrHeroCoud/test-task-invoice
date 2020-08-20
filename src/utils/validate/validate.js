/**
 * @function validate()
 * @param {Object} values
 * @return {Object} errors
 * **/
export const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'login',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (
        values.password &&
        !/^[a-z0-9 \s]{8,20}$/i.test(values.password)
    ) {
        errors.password = 'Invalid password';
    }
    return errors;
}
