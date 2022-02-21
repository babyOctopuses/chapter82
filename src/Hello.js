import React, { Component, Fragment } from "react";

export default function Hello(props) {
  const { type } = props;
  return (
    <div>
      <h1>Hello {type}</h1>
    </div>
  );
}
