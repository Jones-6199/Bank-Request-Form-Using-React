import React from "react";

export default function MyComponent({ value, handleChange,componentTitle}) {
  return (
    <>
      <label>{componentTitle}</label>
      <input 
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
      
    </>
  );
}
