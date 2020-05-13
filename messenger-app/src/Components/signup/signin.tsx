import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import React from "react";
import Dashboard from "../dashboard/dashboard";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const SignInComponent: React.FC<Props> = ({ onSubmit }) => {
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
            <Field
              name="firstName"
              placeholder="first name"
              component={Dashboard}
              label="First Name"
            />
          </div>
          <div>
            <Field
              name="lastName"
              placeholder="last name"
              component={Dashboard}
              label="Last Name"
            />
          </div>
          <div>
            <Field
              name="email"
              placeholder="email"
              component={Dashboard}
              label="Email"
            />
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInComponent;
