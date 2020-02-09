import React from 'react';
import { FormField } from 'semantic-ui-react';

const FormInput = ({ label, ...props}) => {
  return (
    <FormField>
      <label>{label}</label>
      <input {...props} />
    </FormField>
  );
};

export default FormInput;
