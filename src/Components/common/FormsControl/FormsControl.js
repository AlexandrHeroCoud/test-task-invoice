import React from 'react';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";


export const renderTextField = (
    {meta: { touched, error }, input, ...custom },
) =>{
    return (<TextField
        error={touched && error}
        {...input}
        {...custom}
    />)
}

export const renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);



