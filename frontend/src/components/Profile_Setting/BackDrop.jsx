import React from "react";
import ReactDom from "react-dom";
import Backdrop from "../BackDrop/BackDrop";
import OverLay from "../BackDrop/OverLay";

const BackDrop = ({ call, closeBtn, component, forProfilePhoto, callBy }) => {
  return (
    <React.Fragment>
      {call &&
        ReactDom.createPortal(
          <Backdrop call={call} closeBtn={closeBtn} callBy={callBy} />,
          document.getElementById("overlay")
        )}

      {call &&
        ReactDom.createPortal(
          <OverLay
            call={call}
            createNewPost={true}
            forProfilePhoto={forProfilePhoto}
          >
            {component}
          </OverLay>,
          document.getElementById("overlay")
        )}
    </React.Fragment>
  );
};

export default BackDrop;
