import React, { useState, useEffect } from "react";
import { Chat } from "./components/Chat";
import { Auth } from "./components/Auth.js";
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333', // Add your preferred background color
    color: 'white', // Add your preferred text color
    padding: '10px',
    textAlign: 'center',
  };

  
  if (!isAuth) {
    return (
      <>
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
      <footer style={footerStyle}>
      <p>SANIYA MARY JACOB, CSE CY STUDENT, SJCET PALAI </p>
      <p>Email: <a href="mailto:saniyamaryjacob@mulearn.com">saniyamaryjacob@mulearn.com</a></p>
    </footer>
      </>
    );
  }

  return (
    <>
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </AppWrapper>
    <footer style={footerStyle}>
      <p>SANIYA MARY JACOB, CSE CY STUDENT, SJCET PALAI</p>
      <p>Email: <a href="mailto:saniyamaryjacob@mulearn.com">saniyamaryjacob@mulearn.com</a></p>
    </footer>
    </>
  );
}

export default ChatApp;
