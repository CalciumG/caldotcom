import { Button, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const SignUpComponent: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values) => {
        console.log(values);
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <TextField
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
