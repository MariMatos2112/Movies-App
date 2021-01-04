import styled from "styled-components";

export const SearchPage = styled.div`
  padding: 50px;
  background-color: #422057ff;
`;

export const SearchBox = styled.div`
  border: 1px solid #422057ff;
  padding: 20px;
  border-radius: 10px;
  background-color: #e9e9e9;
  position: relative;

  img{
    width: 40px;
    filter: grayscale(1);
    transition: all .1s;

    :hover{
      filter: grayscale(0);
      transform: scale(1.15);
    }
  }

  h1 {
    text-align: center;
    color: #422057ff;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: bold;
  }

  form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    input {
      width: 90%;
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid #cecece;
      font-size: 1rem;
      color: #422057ff;
      font-family: 'Jura', sans-serif;

      :focus{
        border: 1px solid #422057ff;
        outline: none;
      }
    }

    button {
      width: 8%;
      border-radius: 5px;
      border: 1px solid #fcf951ff;
      cursor: pointer;
      background-color: #422057ff;
      color: #fcf951ff;
      text-transform: uppercase;
      transition: all .2s;

      :hover {
        background-color: #fcf951ff;
        color: #422057ff;
        border: 1px solid #422057ff;
      }
    }
  }
`;
