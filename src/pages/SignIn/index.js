import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// import api from "../../services/api";
import { login, isAuthenticated } from "../../services/auth";

import steamLogin from "../../assets/steam-login.png";

import { Container } from "./styles";

function SignIn({ location, history }) {
  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/");
    }
    const { search } = location;
    if (search) {
      const uid = search.replace("?uid=", "");
      login(uid);
      history.push("/");
    }
  }, [history, location]);

  const handleSignIn = async e => {
    window.location.href = "http://localhost:3333/auth/steam";
  };

  return (
    <Container>
      <h1>Faça login para continuar</h1>
      <div className="background">
        <button type="button" onClick={handleSignIn}>
          <img src={steamLogin} alt="LoginButton" />
        </button>
      </div>
    </Container>
  );
}

export default withRouter(SignIn);
