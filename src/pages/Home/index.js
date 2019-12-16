import React, { useState } from "react";

import { Container, Content } from "./styles";

import Topbar from "../Components/Topbar";
import Lobby from "../Components/Lobby";

export default function Home() {
  const [page, setPage] = useState("home");

  const handlePage = async page => {
    // window.location = "steam://connect/18.228.245.47:27015/b7g";
    setPage(page);
  };

  const handleForfun = async () => {
    window.location = "steam://connect/18.228.245.47:27016/b7g";
  };

  return (
    <>
      <Container>
        <Topbar />
        {page === "home" && (
          <Content>
            <div className="container">
              <div className="background lobby">
                <button type="button" onClick={() => handlePage("lobby")}>
                  <h1>Jogar Lobby</h1>
                </button>
              </div>
            </div>
            <div className="container">
              <div className="background forfun">
                <button type="button" onClick={handleForfun}>
                  <h1>Jogar Retake</h1>
                </button>
              </div>
            </div>
          </Content>
        )}
        {page === "lobby" && <Lobby handlePage={handlePage} />}
      </Container>
    </>
  );
}
