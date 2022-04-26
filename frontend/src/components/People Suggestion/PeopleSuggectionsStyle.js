import styled from "styled-components";

const style = `    color: white;
padding: 5px 8px;
border-radius: 5px;
background-color: #0095f6;`;
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
    cursor: pointer;
    ${({ fromUserSuggestion }) => !fromUserSuggestion && style}
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
  margin-top: ${({ fromUserSuggestion }) => !fromUserSuggestion && "50px"};
  width: 100%;
`;
export const Width = styled.div`
  width: ${({ fromUserSuggestion }) => (fromUserSuggestion ? "100%" : "45%")};

  .suggested {
    display: flex;
    justify-content: start;
    color: black;
    font-size: 1.2rem;
  }
`;
