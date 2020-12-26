import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  height: 100vh;
  background-color: #422057ff;

  div {
    border: 1px solid #e9e9e9;
    background-color: #e9e9e9;
    height: 100%;
    display: flex;

    img {
      height: 100%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 40px;

      h1 {
        color: #422057ff;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      p {
        span {
          text-transform: uppercase;
          color: #422057ff;
          font-weight: bold;
        }
        a {
          text-decoration: none;
          transition: all .2s;

          :hover{
            text-decoration: underline;
          }
        }
      }

      div {
        display: flex;
        padding: 0;
        flex-direction: row;
        height: 10%;
        width: 50%;
        justify-content: space-between;
        margin-top: 20px;

        button {
          padding: 10px;
          cursor: pointer;
          background-color: #422057ff;
          border: 1px solid #fcf951ff;
          width: 45%;
          transition: all 0.2s;
          display: flex;
          justify-content: center;
          align-items: center;

          :hover {
            background-color: #fcf951ff;
            border: 1px solid #422057ff;
          }

          :focus {
            outline: none;
          }

          span {
            color: #fcf951ff;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1rem;
            font-family: "Jura", sans-serif;
          }

          :hover span {
            color: #422057ff;
          }

          img {
            height: 25px;
          }
        }
      }
    }
  }
`;

export default Container;
