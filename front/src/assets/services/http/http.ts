export type HTTPRequest = {
  method: string;
  headers: { "Content-Type": string };
  body?: string;
};
export default async function http(url: string, options?: HTTPRequest) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }

  return response;
}
