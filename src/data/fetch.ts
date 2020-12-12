import { API } from "../config";

const request = (_url: string, method = "GET", body: BodyInit = "") => {
  const url = `${API.REMOTE}${_url}`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const params: RequestInit = {
    method,
    headers: headers,
  };
  if (["POST", "PUT"].includes(method)) {
    params.body = typeof body !== "string" ? JSON.stringify(body) : body;
  }

  return fetch(url, params).then((response) => {
    const { status } = response;
    if (status === 204) {
      return {};
    }
    return response.json();
  });
};

export const getData = (url: string) => request(url, "GET");
export const postData = (url: string, data: BodyInit) => request(url, "POST", data);
export const putData = (url: string, data: BodyInit) => request(url, "PUT", data);
export const deleteData = (url: string) => request(url, "DELETE");

const req = {
  get: getData,
  post: postData,
  put: putData,
  delete: deleteData,
};

export default req;
