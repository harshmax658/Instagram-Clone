import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserSuggestions } from "../../redux/user/action";
import ImageComponent from "../IMG/ImageComponent";

import { UserData, Wrapper, Center, Width } from "./PeopleSuggectionsStyle";

const PeopleSuggestion = ({ fromUserSuggestion }) => {
  const { token, othersUser } = useSelector(({ userReducer }) => userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch("/api/user/users-suggestions", {
        headers: {
          Authorization: token,
        },
        credentials: "include",
      });

      if (response.status === 200) {
        const data = await response.json();
        dispatch(setUserSuggestions(data.data));
      }
    };
    callApi();
  }, []);

  return (
    <>
      {othersUser.map(({ userName, avatar }, key) => {
        return fromUserSuggestion ? (
          key < 5 ? (
            <Wrapper key={key}>
              <div className="left">
                <ImageComponent
                  style={{ borderRadius: "50%" }}
                  src={avatar}
                  height="32"
                  width="32"
                />
                <UserData>
                  <p className="username">{userName}</p>
                  <p>tag</p>
                </UserData>
              </div>
              <div className="right">
                <div className="follow">Follow</div>
              </div>
            </Wrapper>
          ) : null
        ) : (
          <Center>
            <Width>
              <div className="suggested">
                <p>Suggested</p>
              </div>
              <Wrapper key={key}>
                <div className="left">
                  <ImageComponent
                    style={{ borderRadius: "50%" }}
                    src={avatar}
                    height="32"
                    width="32"
                  />
                  <UserData>
                    <p className="username">{userName}</p>
                    <p>tag</p>
                  </UserData>
                </div>
                <div className="right">
                  <div className="follow">Follow</div>
                </div>
              </Wrapper>
            </Width>
          </Center>
        );
      })}
    </>
  );
};

export default PeopleSuggestion;
