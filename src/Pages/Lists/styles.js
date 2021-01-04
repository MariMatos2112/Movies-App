import styled from "styled-components";

export const ListsPage = styled.div`
  padding: 50px;
  background-color: #422057ff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ListsBox = styled.div`
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

  div {
    width: 100%;
    display: flex;
    text-align: center;

    div {
      margin: 20px;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      border-radius: 20px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      background-color: white;
      color: #422057ff;
      text-transform: uppercase;
      cursor: default;

      :hover h2 {
        text-decoration: underline;
      }

      div {
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 10px;
        width: 90%;
        margin: 20px auto;
        border: none;
        padding-top: 0;
        box-shadow: none;

        button {
          background-color: #cecece;
          width: 90%;
          padding: 15px;
          cursor: pointer;
          border-radius: 10px;
          border: none;
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
          transition: all 0.2s;
          margin-top: 5px;

          :hover {
            background-color: #fcf951ff;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            transform: scale(1.1);
          }

          :focus {
            outline: none;
          }
        }
      }
    }
  }
`;

export const ListContainer = styled.div`
  width: 93%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  column-gap: 30px;
  row-gap: 20px;
`;
