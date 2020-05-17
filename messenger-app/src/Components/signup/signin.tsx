import { Form, Formik, Field } from "formik";
import React from "react";
import styled from "styled-components";

interface Values {
  name: string;
  height: number;
  weight: number;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const Button = styled.button`
  color: black;
`;

const Pre = styled.pre`
  color: white;
`;

const SignInComponent: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", height: 0, weight: 0 }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <Field name="name" placeholder="Name" label="Name" />
          </div>
          <div>
            <Field name="height" placeholder="height" label="Height" />
          </div>
          <div>
            <Field name="weight" placeholder="weight" label="Weight" />
          </div>
          <Pre>{JSON.stringify(values, null, 2)}</Pre>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInComponent;
