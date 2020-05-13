import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";

const Dashboard: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field,
}) => {
  return (
    <div>
      <TextField label={label} placeholder={placeholder} {...field} />
    </div>
  );
};

export default Dashboard;
