import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataUpdateStart } from "../../redux/user/action";

const UploadProfilePhoto = ({ setSelectPopUp, label, component, backDrop }) => {
  const dispatch = useDispatch();

  const { avatar, token } = useSelector(({ userReducer }) => userReducer);

  const [render, setRender] = useState({
    oldAvatar: "",
    isRender: true,
  });

  const [isPhotoSelected, setIsPhotoSelected] = useState(false);

  const [profilePhoto, setprofilePhoto] = useState("");

  useEffect(() => {
    if (render.isRender) {
      setRender((prev) => {
        return { ...prev, oldAvatar: avatar, isRender: false };
      });
    }
    if (isPhotoSelected && profilePhoto) {
      const profilePhotoImg = new FormData();

      profilePhotoImg.append("avatar", profilePhoto);
      dispatch(userDataUpdateStart({ profilePhotoImg, token }));
      setIsPhotoSelected(false);
    }
    if (profilePhoto) {
      if (render.oldAvatar !== avatar) {
        setSelectPopUp(false);
        document.getElementById("root").style.position = "relative";
      }
    }
  }, [isPhotoSelected, profilePhoto, dispatch, token, avatar, setSelectPopUp]);

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
                setSelectPopUp(true);
                document.getElementById("root").style.position = "fixed";
              }
            : null
        }
      >
        {component ? component : label}
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
