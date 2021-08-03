import React from "react";
import { Link } from 'react-router-dom';
import { Form } from "./Form";

function Login() {
  return (
    <>
      <Form onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" name="name" />
        <input type="text" name="password" />
        <input type="submit" value="Log In" />
      </Form>

      <Link to="/register">Register</Link>
    </>
  )
}

export default Login;
