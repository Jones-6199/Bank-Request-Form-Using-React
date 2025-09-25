import React from "react";

export default function ButtonForm({handling,value,inputName}) {
  return (
    <div>
          <label>{inputName}</label>
        <input 
          type="text" 
          value={value}
          onChange={(e) => handling(e.target.value)}
        />

    </div>
  );
}
