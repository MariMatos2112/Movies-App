import styled from "styled-components";

export const MyListPage = styled.div`
  padding: 50px;
`

export const MyListTitle = styled.div`
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

  h1{
    text-align: center;
  }
`;
