import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: #224;
  padding: 20px;
  border-bottom: 2px solid #335;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 32px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }

    p {
      margin: 0 20px 0 5px;
      font-size: 16px;
      font-weight: bold;
    }

    svg {
      cursor: pointer;
    }
  }
`;
