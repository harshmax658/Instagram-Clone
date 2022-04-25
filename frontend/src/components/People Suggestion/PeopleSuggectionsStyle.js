import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  .left {
    display: flex;
    align-items: center;
  }
  .follow {
    color: #0095f6;
  }
`;
export const UserData = styled.div`
  margin-left: 10px;
  .username {
    color: black;
  }
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
export const Width = styled.div`
  width: 40%;
  .suggested {
    display: flex;
    justify-content: start;
    color: black;
    font-size: 1.2rem;
  }
`;
