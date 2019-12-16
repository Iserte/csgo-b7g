import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { Container } from "./styles";

import { getToken, logout } from "../../../services/auth";
import api from "../../../services/api";

export default function Topbar() {
  const [steamUser, setUserSteam] = useState();

  useEffect(() => {
    async function getApi() {
      await api.post("/user", { uid: getToken() }).then(({ data }) => {
        if (data) {
          setUserSteam(data);
        }
      });
    }

    getApi();
  }, []);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <Container>
      <h1>B7 Gaming</h1>
      <span>
        <img src={steamUser && steamUser.avatarmedium} alt="" />
        <p>{steamUser && steamUser.personaname}</p>
        <FaSignOutAlt onClick={handleLogout} />
      </span>
    </Container>
  );
}
