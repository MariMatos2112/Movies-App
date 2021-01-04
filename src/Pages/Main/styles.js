import styled from "styled-components";

const InitialPage = styled.div`
  height: 100vh;
  position: relative;
  background-image: url(${(props) => props.wallpaper});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .mainBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 20px 30px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    cursor: default;

    h1 {
      font-size: 3rem;
      color: #fcf951ff;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: -25px;
      text-shadow: 2px 2px 4px #fcf95199;
    }

    p {
      font-size: 1.2rem;
      color: white;
      font-weight: 600;
    }

    div {
      width: 90%;
      display: flex;
      justify-content: space-around;
      button {
        background-color: white;
        padding: 15px 30px;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        border: none;
        font-family: "Jura", sans-serif;
        font-weight: 600;
        margin-top: 6px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

        :hover {
          background-color: #fcf951ff;
          margin-top: 0px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  .wallpaperBox {
    position: absolute;
    display: flex;
    height: 100vh;
    width: 18vw;
    transition: left 0.4s;
    left: ${(props) => (props.show ? 0 : "-15.84vw")};

    div:first-of-type {
      display: flex;
      flex-direction: column;
      width: 88%;
      img {
        height: 20%;
        filter: grayscale(0.7);
        transition: all 0.2s;

        :hover {
          filter: grayscale(0);
          cursor: pointer;
        }
      }
    }

    div:last-of-type {
      background-color: rgba(255, 255, 255, 0.5);
      width: 12%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      :hover {
        background-color: rgba(255, 255, 255, 0.6);

        img {
          filter: invert(0.6);
        }
      }

      img {
        filter: invert(1);
        transition: filter .2s;
        height: 18%;
      }
    }
  }
`;

export default InitialPage;
