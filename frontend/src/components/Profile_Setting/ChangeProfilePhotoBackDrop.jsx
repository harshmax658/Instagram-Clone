import React from "react";

import { ChangeProfileBackdrop } from "./ProfileSettingStyle";
const ChangeProfilePhotoBackDrop = ({ setProfilePhoto }) => {
  return (
    <ChangeProfileBackdrop>
      <h2>Change Profile Photo</h2>
      <label htmlFor="profilePhoto">Upload photo</label>
      <input
        onChange={setProfilePhoto}
        type="file"
        name="profilePhoto"
        id="profilePhoto"
      />
      <div>Remove Current Photo</div>
      <p>Cancel</p>
    </ChangeProfileBackdrop>
  );
};

export default ChangeProfilePhotoBackDrop;
