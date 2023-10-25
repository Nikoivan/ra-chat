export type ResponseType = {
  content: string;
  id: number;
  userId: string;
};

export default function getMessagesFromResponse(
  userId: string,
  response: ResponseType[]
): { content: string; messageType: string; id: number }[] {
  return response.map((el) => {
    console.log(el);
    return {
      content: el.content,
      id: el.id,
      messageType: el.userId === userId ? "my" : "other",
    };
  });
}
