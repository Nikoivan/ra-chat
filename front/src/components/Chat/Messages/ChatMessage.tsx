import "./ChatMessage.css";

export type MessageTypeProps = {
  id: number;
  messageType: string;
  content: string;
};

export default function ChatMessage({
  messageType,
  content,
}: MessageTypeProps) {
  return (
    <li className={`chat__message ${messageType}`}>
      <p className="message__content">{content}</p>
    </li>
  );
}
