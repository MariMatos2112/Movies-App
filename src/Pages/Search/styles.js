import styled from "styled-components";

export const SearchPage = styled.div`
  padding: 20px;

  h1 {
    text-align: center;
    color: #e94b3cff;
  }

  form{
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-around;

      input{
          width: 90%;
          padding: 10px 20px;
          border-radius: 5px;
          border: 1px solid #cecece;
          font-size: 1rem;
      }

      button{
          width: 5%;
          border-radius: 5px;
          border: 1px solid #cecece;
          cursor: pointer;
      }
  }
`;
