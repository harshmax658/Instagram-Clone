import React from "react";
import {
  SOContent,
  SecondButton,
  Container,
  SecondTwo,
  ImageDiv,
  ImageSpan,
  First,
  FirstinnerOne,
  Image,
  FirstinnerTwo,
  Second,
  SecondOne,
  Psecond,
  PsecondTwo,
  SOContentName,
  SOContentDetail,
  SoSpan,
} from "./MessageStyle";
import DownSvg from "../../svg/DownSvg";
import NewMessageSvg from "../../svg/NewMessageSvg";

const Message = () => {
  const  userMessages = [
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },
    {
      image:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      userName:"Rohit",
      lastMessage:"hello",
      time:"12w",
    },

  ]
  return (
    <Container>
      {/* parent */}
      <First>
        <FirstinnerOne>
          <div>
            Shivvaye
            <span>
              <DownSvg />
            </span>
          </div>
          <div>
            <NewMessageSvg />
          </div>
        </FirstinnerOne>

        <FirstinnerTwo>
          <SecondTwo>
            <div>Messages</div>
            <div>
              1 <span> Request </span>
            </div>
          </SecondTwo>


          {   
            userMessages.map(user => 
                    { 
              return (
                      <SecondOne>
                        <ImageDiv>
                          <ImageSpan>
                          <Image src={user.image} />
                        </ImageSpan>
                        </ImageDiv>
                        <SOContent>
                          <SOContentName>{user.userName}</SOContentName>
                          <SOContentDetail>
                        {user.lastMessage}<SoSpan>{user.time}</SoSpan>
                          </SOContentDetail>
                        </SOContent>
                      </SecondOne>
                      )
                  }
                )
          }


        </FirstinnerTwo>
      </First>
      <Second>
        <div>
          <Psecond>Your Message</Psecond>
          <PsecondTwo>
            Send private photos and messages to a friend or group.
          </PsecondTwo>
          <SecondButton>send message</SecondButton>
        </div>
      </Second>
    </Container>
  );
};

export default Message;
//Hem
