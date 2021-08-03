import React, { SyntheticEvent, useState } from 'react';
import history from './history';
import { Form } from './Form';

interface EventTarg extends EventTarget {
  name: string,
  value: string
}

function Register() {
  const [values, setValues] = useState({
    name: "",
    last_name: "",
    email: "",
    cpf: "",
    password: "",
    re_password: "",
  });

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    history.push("/review", values);
  }

  function handleChange(e: SyntheticEvent) {
    const { name, value } = e.target as EventTarg;

    setValues({
      ...values,
      [name]: value
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" value={values.name} onChange={handleChange} />

      <label htmlFor="last_name">Sobrenome</label>
      <input type="text" name="last_name" value={values.last_name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={values.email} onChange={handleChange} />

      <label htmlFor="cpf">CPF</label>
      <input type="text" name="cpf" value={values.cpf} onChange={handleChange} />

      <label htmlFor="password">Senha</label>
      <input type="text" name="password" value={values.password} onChange={handleChange} />

      <label htmlFor="re_password">Digite a senha novamente</label>
      <input type="text" name="re_password" value={values.re_password} onChange={handleChange} />

      <input type="submit" value="Register" />
    </Form>
  );
}

export default Register;
