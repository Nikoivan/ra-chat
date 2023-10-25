import "./ChatMain.css";
import ChatMessage, { MessageTypeProps } from "../Messages/ChatMessage";

export default function ChatMain({
  messages,
}: {
  messages: MessageTypeProps[];
}) {
  return (
    <main className="chat__main">
      <ul className="chat__messages-list">
        {messages.map((el: MessageTypeProps) => (
          <ChatMessage key={el.id} {...el} />
        ))}
      </ul>
    </main>
  );
}
