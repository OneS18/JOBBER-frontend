import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const state = useAppContext();
  console.log(state);
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  //global state and use navigate
  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Register" : "Login"}</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        {values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? "Already a member?" : "Not a member yet"}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
