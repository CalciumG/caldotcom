import React from "react";
import { TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import styled from "styled-components";

const Dashboard: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field,
}) => {
  const List = styled.li`
    list-style: none;
  `;

  const A = styled.a`
    text-decoration: none;
    color: #61dafb;
  `;

  return (
    <div id="Link Container">
      <h1>
        <List>
          <A href="/signup">Edit data</A>
        </List>
      </h1>
    </div>
  );
};

export default Dashboard;
