import React from "react";
import UploadProfilePhoto from "./UploadProfilePhoto";
import { ChangeProfileBackdrop } from "./ProfileSettingStyle";
const ChangeProfilePhotoBackDrop = ({ setSelectPopUp, selectPopUp }) => {
  return (
    <ChangeProfileBackdrop>
      <h2>Change Profile Photo</h2>
      <UploadProfilePhoto
        backDrop={true}
        label="Upload photo"
        setSelectPopUp={setSelectPopUp}
      />
      <div>Remove Current Photo</div>
      <p onClick={() => setSelectPopUp(false)}>Cancel</p>
    </ChangeProfileBackdrop>
  );
};

export default ChangeProfilePhotoBackDrop;
