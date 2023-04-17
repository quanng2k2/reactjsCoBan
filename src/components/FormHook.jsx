import React, { useState } from "react";

function FormHook() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  let handleEmailChange = (event) => {
    setEmail(event.target.value);   
  };

  let handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  let handleSubmitForm = (event) => {
    event.preventDefault(); 
    console.log({
      name,
      email,
      phone,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>
            Name :{" "}
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Email :{" "}
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div>
          <label>
            Phone :
            <input type="tel" value={phone} onChange={handlePhoneChange} />
          </label>
        </div>
        <button type="submit">onSubmit</button>
      </form>
      <p>Name : {name}</p> 
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
    </div>
  );
}

export default FormHook;
