import React from "react";
import ContainerComponent from "../../components/container/ContainerComponent";
import { Center, Left, Right } from "./EditProfileStyle";

const EditProfile = () => {
  return (
    <Center>
      <ContainerComponent width="70%">
        <Left>Edit</Left>
        <Right>right</Right>
      </ContainerComponent>
    </Center>
  );
};

export default EditProfile;
