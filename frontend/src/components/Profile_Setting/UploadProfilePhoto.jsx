import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataUpdateStart } from "../../redux/user/action";

const UploadProfilePhoto = ({ setSelectPopUp, label, backDrop }) => {
  const dispatch = useDispatch();
  const { avatar, token } = useSelector(({ userReducer }) => userReducer);
  const old = avatar;

  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const [profilePhoto, setprofilePhoto] = useState("");

  useEffect(() => {
    if (isPhotoSelected && profilePhoto) {
      const profilePhotoImg = new FormData();

      profilePhotoImg.append("avatar", profilePhoto);

      console.log(avatar);
      dispatch(userDataUpdateStart({ profilePhotoImg, token }));

      setSelectPopUp(false);
      //   console.log(avatar);
    }
  }, [isPhotoSelected, profilePhoto, dispatch, token, avatar, setSelectPopUp]);
  console.log(old, "old");
  console.log(avatar, "avatar");
  //   console.log(typeof setSelectPopUp);
  const setProfilePhoto = (event) => {
    setIsPhotoSelected(true);
    setprofilePhoto(event.target.files[0]);
  };

  return (
    <>
      <label
        htmlFor={backDrop || !avatar ? "profilePhoto" : null}
        onClick={
          avatar
            ? () => {
                document.getElementById("profileSetting").style.position =
                  "fixed";
                setSelectPopUp(true);
              }
            : null
        }
      >
        {label}
      </label>
      <input
        onChange={setProfilePhoto}
        type="file"
        name="profilePhoto"
        id="profilePhoto"
      />
    </>
  );
};

export default UploadProfilePhoto;
