import { useState } from "react";
import "./App.css";

const initialFormState = {
  fullName: "",
  address: "",
  phoneNumber: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {
  //TODO: Add your state fields here
  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit clicked', formState)
    setFormState(initialFormState)
  }


  const handleChange = (event) => {

    const targetName = event.target.name;
    const targetValue = event.target.value;
    const targetChecked = event.target.checked;

    if (targetName === 'fullName') {
      console.log(targetValue)
      setFormState({...formState, fullName: targetValue})
    }
    if (targetName === 'address') {
      setFormState({...formState, address: targetValue})
    }
    if (targetName === 'email') {
      setFormState({...formState, email: targetValue})
    }
    if (targetName === "consent") {
      setFormState({ ...formState, consent: targetChecked });
    }
    if (targetName === "phone") {
      setFormState({ ...formState, phoneNumber: targetValue });
    }
    if (targetName === "submit") {
      console.log("submit");
    }
  };


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" value={formState.fullName} name="fullName" required onChange={handleChange}/>
          </label>
          <label>
            Address
            <input type="text" value={formState.address} name="address" onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formState.phoneNumber} onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" name="email" value={formState.email} onChange={handleChange} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formState.consent}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}