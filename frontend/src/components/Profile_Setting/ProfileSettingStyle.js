import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Container = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 85%;
  /* border: 1px solid; */
  padding: 40px 0;

  margin-right: 40px;

  .l30p {
    width: 20%;
    display: flex;
    justify-content: end;
    margin-right: 30px;
  }
`;
export const ChangeProfilePhoto = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${({ cngp }) => cngp && "align-items: center;"}
`;
export const ChangeButton = styled.div`
  h2 {
    font-weight: 300;
    font-size: 1.4rem;
  }
  div {
    cursor: pointer;
    color: #0095f6;
    font-weight: bold;
  }
`;
export const Input = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: baseline;
  margin-bottom: 15px;
  label {
    font-size: 1rem;
    font-weight: bold;
  }
  input,
  textarea {
    border-radius: 3px;
    width: 100%;
    padding: 0px 11px;
    height: 30px;
    background: none;
    border: 1px solid lightgray;
    font-size: 17px;
    &:focus {
      outline: 2px solid;
      border: none;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const SubmitButton = styled.div`
  width: 68%;
  display: flex;
  justify-content: center;
  button {
    width: 25%;
  }
`;
export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1 1; */
  width: 65%;
  p {
    font-size: 13px;
    margin: 11px 0;
    span {
      display: block;
      margin-top: 8px;
    }
  }
`;

export const UserImg = styled.div``;
export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  label {
    /* display: none !important; */
  }
`;
export const PersonalInformationNotice = styled.div`
  margin-top: 35px;
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
`;
