import styled from "styled-components";
import background from "../../assets/background-login.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0d1022;

  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
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
    }
  }
`;
