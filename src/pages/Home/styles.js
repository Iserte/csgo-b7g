import styled from "styled-components";
import lobbyBackground from "../../assets/background-lobby.png";
import forfunBackground from "../../assets/background-forfun.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #0d1022;

  .container {
    margin: 0 50px;
  }

  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
    border-radius: 50%;
    width: 320px;
    height: 325px;
    margin: 25px 0;

    button {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      cursor: pointer;
      color: #fff;
    }
  }

  .lobby {
    background-image: url(${lobbyBackground});
  }
  .forfun {
    background-image: url(${forfunBackground});
  }
`;
