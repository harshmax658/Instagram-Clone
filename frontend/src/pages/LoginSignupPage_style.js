import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 100%;
`;
export const Section = styled.section`
  border: 2px solid;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InstaPhoneImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 400px;
  height: 600px;
`;
export const RenderdImages = styled.div`
  position: relative;
  width: 58%;
  top: 97px;
  left: 147px;
  height: 69.3%;
`;
