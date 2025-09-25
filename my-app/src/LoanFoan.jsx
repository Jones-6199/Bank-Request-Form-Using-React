
import "./LoanFormStyle.css"
import PopUp from "./PopUp";






export default function LoanForm() {





  return (
    <div className="flex" style={{
       
        flexDirection:'column',

    }}>

      <form className="flex" style={{
        flexDirection:'column'
      }}
      id="Loan-form">
        <h1>Requesting a bank</h1>
        <hr />
        <label>Name: </label>
        <input type="text" />

        <label>Phone Number:</label>
        <input type="text" />

        <label>Age: </label>
        <input type="text" />

        <label style={{marginTop:"30px"}}>Are you an employee?</label>
        <input type="checkbox"  />

        <label>Salary</label>
        <select>
            <option>1500$</option>
            <option>2500$</option>
            <option>5000$</option>
        </select>


        <button>Send request</button>
    </form>

    <PopUp />
    
    </div>
  );
}
