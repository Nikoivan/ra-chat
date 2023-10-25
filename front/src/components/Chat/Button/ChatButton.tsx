export default function ChatButton({
  callback,
  url,
}: {
  callback: () => void;
  url: string;
}) {
  return (
    <span onClick={callback} className="chat__send-btn">
      <img src={url} alt="update" className="btn__img" />
    </span>
  );
}
