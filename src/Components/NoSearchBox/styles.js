import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 93%;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  h2 {
    color: #fcf951ff;
    text-align: center;
  }

  button, a {
    background-color: #cecece;
    width: 30%;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.2s;
    font-size: 1rem;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;

    :hover {
      background-color: #fcf951ff;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      transform: scale(1.1);
    }

    :focus {
      outline: none;
    }
  }
`;
