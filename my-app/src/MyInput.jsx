import React from "react";
import MyComponent from "./MyComponent";

export default function MyInput({ value, handleChangeNumber, componentTitle }) {
  return (
    <>
      <h1>this is the header of the component</h1>
      <MyComponent
        value={value}
        handleChangeNumber={handleChangeNumber}
        componentTitle={componentTitle}
      />
      <h1>this is the footer of the component</h1>
    </>
  );
}
