import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  height: 100vh;
  background-color: #422057ff;
  position: relative;

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
          transition: all 0.2s;

          :hover {
            text-decoration: underline;
          }
        }
      }

      div {
        display: flex;
        padding: 0;
        flex-direction: row;
        height: 11%;
        width: 55%;
        justify-content: space-between;
        margin-top: 20px;

        button, a {
          padding: 10px;
          cursor: pointer;
          background-color: #422057ff;
          border: 1px solid #fcf951ff;
          width: 45%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: flex-end;
          transition: all 0.2s;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          text-decoration: none;

          :hover {
            background-color: #fcf951ff;
            border: 1px solid #422057ff;
            align-self: flex-start;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
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
