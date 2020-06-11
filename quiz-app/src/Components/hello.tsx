import React from "react";

interface Props {
  userName: string;
}

export const Hello = (props: Props) => {
  return <h2>Hello user: {props.userName} !</h2>;
};
