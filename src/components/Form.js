import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [fname, setFName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errormsg, setErrormsg] = useState({
    fname: false,
    gmail: false,
    password: false,
    cpassword: false,
  });

  let formError = {
    fname: false,
    gmail: false,
    password: false,
    cpassword: false,
  };

  let isValid = false;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname === "") {
      formError.fname = true;
      isValid = false;
    } else {
      isValid = true;
    }
    if (gmail === "") {
      formError.gmail = true;
      isValid = false;
    } else {
      isValid = true;
    }
    if (password === ""&& password.length<6) {
      formError.password = true;
      isValid = false;
    } else {
      isValid = true;
    }
    if (cpassword !== password) {
      formError.cpassword = true;
      isValid = false;
    } else {
      isValid = true;
    }

    setErrormsg({ ...formError });
    if (isValid) {
      console.log("Api work");
      console.log(fname);
      console.log(gmail);
      console.log(password);
      console.log(cpassword);
      console.log('ErrorMassage',errormsg);
    }
  };
  console.log('ErrorMassage',errormsg);

  return (
    <div className="main">
      <h1>FORM VALIDATION</h1>
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label>FullName</label>
          <input
            value={fname}
            type="text"
            name="fname"
            onChange={(e) => setFName(e.target.value)}
          ></input>
          {errormsg.fname && <span style={{textAlign:'left',color:'red'}}>*pleace enter your full name</span>}
        </div>
        <div className="input-field">
          <label>Email</label>
          <input
            value={gmail}
            type="gmail"
            name="gmail"
            onChange={(e) => setGmail(e.target.value)}
          ></input>
          {errormsg.gmail && <span style={{textAlign:'left',color:'red'}}>*pleace enter your gmail</span>}
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errormsg.password && <span style={{textAlign:'left',color:'red'}}>*pleace enter password atlest more than 6 character</span>}
        </div>
        <div className="input-field">
          <label>Confirm Password</label>
          <input
            value={cpassword}
            type="password"
            name="cpassword"
            onChange={(e) => setCPassword(e.target.value)}
          ></input>
           {errormsg.cpassword && <span style={{textAlign:'left',color:'red'}}>*Do not match your password</span>}
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
