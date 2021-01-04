import styled from "styled-components";

const Card = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  width: 100%;
  height: 210px;
  filter: grayscale(1);

  :hover {
    transform: scale(1.1);
    filter: grayscale(0);
    background-color: #fcf951ff;
  }

  img {
    width: 100%;
    transition: all 0.2s;
    height: 80%;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: -4px;
    height: 20%;
    align-items: center;

    h5 {
      color: #422057ff;
      text-decoration: none !important;
      text-transform: uppercase;
    }
  }
`;

export default Card;
