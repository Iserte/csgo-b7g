import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import io from "socket.io-client";

import { Container, Lobbies } from "./styles";

import { getToken } from "../../../services/auth";

const socket = io("http://localhost:3333/");

export default function Lobby({ handlePage }) {
  const [users, setUsers] = useState([]);

  socket.on("queue", data => setUsers(data || []));

  useEffect(() => {
    !socket.connected && socket.connect();
    socket.emit("getQueue");
  }, []);

  const handleQueue = async e => {
    if (users.filter(user => user.id === getToken()).length < 1) {
      socket.emit("joinQueue", getToken());
    } else {
      socket.emit("leaveQueue");
    }
  };

  return (
    <Container>
      <span>
        <button
          className="voltar"
          onClick={() => {
            socket.disconnect();
            handlePage("home");
          }}
        >
          <FaChevronLeft /> Voltar
        </button>
        <button
          className={
            users.filter(user => user.id === getToken()).length < 1
              ? "entrar"
              : "sair"
          }
          onClick={handleQueue}
        ></button>
      </span>

      <Lobbies>
        <h1>Jogadores na fila</h1>
        <ul>
          {users.length > 0 ? (
            users.map(user => {
              return (
                <li key={user.id}>
                  <img src={user.avatar} alt="" />
                  <h2>{user.name}</h2>
                  {/* <p>Level 20</p> */}
                </li>
              );
            })
          ) : (
            <h2>Nenhum jogador na fila</h2>
          )}
        </ul>
      </Lobbies>
    </Container>
  );
}
