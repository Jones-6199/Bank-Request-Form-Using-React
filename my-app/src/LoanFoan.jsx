import { useState } from "react";
import "./LoanFormStyle.css"
import PopUp from "./PopUp";

export default function LoanForm() {

  const [inputValues, setInputValues ] = useState({
    name: "",
    phoneNumber:"",
    age:"",
    isEmployee:false,
    salaryAmount:"",
  });

  const isFormValid = 
    inputValues.name.trim() !== "" && 
    inputValues.phoneNumber.trim() !== "" &&
    inputValues.age.trim() !== "" &&
    inputValues.salaryAmount.trim() !== "";

  return (
    <div className="flex" style={{ flexDirection:'column' }}>
      <form 
        className="flex" 
        style={{ flexDirection:'column' }}
        id="Loan-form"
        onSubmit={(e) => {
          e.preventDefault()
          console.log("Form submitted:", inputValues)
        }}
      >
        <h1>Requesting a bank</h1>
        <hr />

        <label>Name: </label>
        <input 
          type="text" 
          value={inputValues.name} 
          onChange={(e) => setInputValues({...inputValues, name: e.target.value})} 
        />

        <label>Phone Number:</label>
        <input 
          type="text" 
          value={inputValues.phoneNumber}
          onChange={(e) => setInputValues({...inputValues, phoneNumber: e.target.value})}
        />

        <label>Age: </label>
        <input 
          type="text" 
          value={inputValues.age}
          onChange={(e) => setInputValues({...inputValues, age: e.target.value})}
        />

        <label style={{marginTop:"30px"}}>Are you an employee?</label>
        <input 
          type="checkbox"
          checked={inputValues.isEmployee}
          onChange={(e) => setInputValues({...inputValues, isEmployee: e.target.checked})}
        />

        <label>Salary</label>
        <select
          value={inputValues.salaryAmount}
          onChange={(e) => setInputValues({...inputValues, salaryAmount: e.target.value})}
        >
          <option value="">-- Select salary --</option>
          <option value="1500$">1500$</option>
          <option value="2500$">2500$</option>
          <option value="5000$">5000$</option>
        </select>

        <button type="submit" disabled={!isFormValid}>
          Send request
        </button>
      </form>
    </div>
  );
}
