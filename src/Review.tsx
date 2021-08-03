import React from "react";
import { Redirect } from "react-router-dom";
import history from "./history";

function Review() {
  const { location } = history;

  if (!location.state) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div>{`Nome: ${location.state.name}`}</div>
      <div>{`Sobrenome: ${location.state.last_name}`}</div>
      <div>{`Email: ${location.state.email}`}</div>
      <div>{`CPF: ${location.state.cpf}`}</div>
      <div>{`Senha: ${location.state.password}`}</div>
      <div>{`Senha repetida: ${location.state.re_password}`}</div>
    </>
  )
}

export default Review;
