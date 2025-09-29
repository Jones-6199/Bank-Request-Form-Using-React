import React from "react";

export default function MyComponent({ value, handleChangeNumber,componentTitle}) {
  return (
    <>
      <label>{componentTitle}</label>
      <input 
        value={value}
        onChange={(event) => {
          handleChangeNumber(event.target.value);
        }}
      />
    </>
  );
}
