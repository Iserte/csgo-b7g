import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  background: #0d1022;
  height: 100%;
  padding: 20px;

  span {
    width: 100%;
    max-width: 1300px;
    padding: 0 25px;
    display: flex;
  }

  button {
    cursor: pointer;
    padding: 15px 25px;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    margin: 0 15px;
  }

  .voltar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #536;

    svg {
      margin-right: 5px;
    }
  }

  .entrar {
    background: #839800;
    ::after {
      content: "Entrar na fila";
    }
  }

  .sair {
    background: #f44;
    ::after {
      content: "Sair da fila";
    }
  }
`;

export const Lobbies = styled.div`
  padding: 25px;
  width: 100%;
  max-width: 1300px;
  padding: 25px;

  h1 {
    background: #0a1830;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 12px;
    margin-bottom: 25px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px;
      padding: 20px;
      background: #135;
      border-radius: 20px;
      border: 2px solid #247;
      /* box-shadow: 0 4px #124; */

      img {
        width: 144px;
        height: 144px;
        border-radius: 50%;
        border: 3px solid #fff;
      }

      h2 {
        margin-top: 20px;
      }

      p {
        color: #f55;
        font-size: 12px;
      }
    }
  }
`;
