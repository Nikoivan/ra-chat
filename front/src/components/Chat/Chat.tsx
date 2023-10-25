import { useState, useEffect, ChangeEvent, useRef } from "react";
import http from "../../assets/services/http/http";
import Footer from "./Footer/Footer";
import "./Chat.css";
import ChatMain from "./Main/ChatMain";
import { MessageTypeProps } from "./Messages/ChatMessage";
import getUserId from "../../assets/services/storage/getUserId";
import Preloader from "../Preloader/Preloader";
import getMessagesFromResponse from "../../assets/services/getMessagesFromResponse/getMessagesFromResponse";

export default function Chat() {
  const [messages, setMessages] = useState<MessageTypeProps[]>([]);
  const [inputState, setInputState] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [lastId, setLastId] = useState("");
  const userId = getUserId();
  let timeoutId: number;

  const url = "http://localhost:7070/messages";
  const blockName = "chat";

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const getMessages = async () => {
    if (timeoutId !== 0) {
      window.clearTimeout(timeoutId);
    }
    const jsonResponse = await http(`${url}?from=${userId}`);
    if (jsonResponse.ok) {
      const response = await jsonResponse.json();
      const messages = getMessagesFromResponse(userId, response);

      setMessages(messages);
      console.log(messages);

      response.length > 0 && setLastId(response[response.length - 1].id);
    } else {
      console.log("Error");
    }
    setCount((prev) => (prev += 1));
  };

  const sendMessage = async () => {
    if (inputState === "") {
      return;
    }

    const requestBody = {
      userId,
      content: inputState,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const response = await http(`${url}?from=${lastId}`, options);
    if (!response.ok) {
      throw new Error("Send message error");
    }
    setInputState("");
    getMessages();
  };

  useEffect(() => {
    console.log("componentDidMount");
    setTimeout(async () => {
      getMessages();
      setLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
    timeoutId = window.setTimeout(() => {
      getMessages();
    }, 5000);

    return () => {
      console.log("componentWillUnmount");
      window.clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div className="chat">
      <header className="chat__header">
        <h2 className="header__title">Anonymous Chat</h2>
      </header>
      {!loading ? <Preloader /> : <ChatMain messages={messages} />}
      <Footer
        blockName={blockName}
        onChangeHandler={onChangeHandler}
        callback={sendMessage}
        inputState={inputState}
      />
    </div>
  );
}
