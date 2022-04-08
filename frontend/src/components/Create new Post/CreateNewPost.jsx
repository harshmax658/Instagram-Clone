import React from "react";
import { NewPost, H2, SelectFile, Center, Heading } from "./createNewPostStyle";
import OverLay from "../BackDrop/OverLay";
import Backdrop from "../BackDrop/BackDrop";
import Gallery from "../../svg/Gallery";
import ReactDom from "react-dom";
import FormInputComponent from "../Form Input/FormInputComponent";
const CreateNewPost = ({ close }) => {
  return (
    <>
      {ReactDom.createPortal(
        <>
          <Backdrop call={true} closeBtn={close} />
          <Center>
            <OverLay call={true} createNewPost={true}>
              <NewPost>
                <Heading>
                  <H2>CreateNewPost</H2>
                </Heading>
                <SelectFile>
                  <Gallery />
                  <H2>Drag photos and videos here</H2>
                  <FormInputComponent
                    type="file"
                    label="Select from computer"
                    labelFor="fileInput"
                    id="fileInput"
                    name="fileInput"
                  />
                </SelectFile>
              </NewPost>
            </OverLay>
          </Center>
        </>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default CreateNewPost;
//Harsh
