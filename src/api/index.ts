import axios, { AxiosResponse } from "axios";

const generateQueryString = (
  params: Record<string, any> | undefined
): string => {
  const parts: string[] = [];

  const add = (key: string, value: string) => {
    parts.push(`${key}=${value}`);
  };

  for (const key in params) {
    if (!params.hasOwnProperty(key)) {
      continue;
    }
    const obj = params[key];

    if (Array.isArray(obj)) {
      obj.forEach((value) => add(key, value));
    } else {
      add(key, obj);
    }
  }
  return parts.length ? `?${parts.join("&")}` : "";
};

const get = (
  url: string,
  params?: any,
  headers?: any
): Promise<AxiosResponse> => {
  const uri = `${url}${generateQueryString(params)}`;
  return axios.get(uri, { headers });
};
const post = (url: string, data?: any, headers?: any): Promise<AxiosResponse> =>
  axios.post(url, data, { headers });
const put = (url: string, data: any, headers?: any): Promise<AxiosResponse> =>
  axios.put(url, data, { headers });
const deleteQuery = (url: string, data?: any): Promise<AxiosResponse> =>
  axios.delete(url, data);

export const api = {
  get,
  post,
  put,
  deleteQuery,
};
