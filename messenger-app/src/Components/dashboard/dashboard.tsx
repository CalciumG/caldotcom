import React from "react";
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";

interface Props extends FieldProps {
  placeholder: string;
}

const Dashboard: React.FC<Props> = ({ placeholder, field }) => {
  return (
    <div>
      <TextField placeholder={placeholder} {...field} />
    </div>
  );
};

export default Dashboard;
