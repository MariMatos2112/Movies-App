import styled from "styled-components";

const Btn = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 40px;

  img {
    filter: grayscale(1);
    transition: all 0.2s;
    cursor: pointer;
    width: 40px;

    :hover {
      filter: grayscale(0);
    }
  }
`;

export default Btn;
