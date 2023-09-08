import axios, { AxiosRequestConfig } from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5000/v1',
  timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

const asyncGet = async (uri: string, option?: AxiosRequestConfig) => {
  try {
    const { data } = await Api.get(uri.replace(/\/+/g, '/'), option);
    return data;
  } catch (e) {
    return { error: e };
  }
};
const asyncPost = async (
  uri: string,
  payload?: any,
  option?: AxiosRequestConfig
) => {
  try {
    const { data } = await Api.post(uri.replace(/\/+/g, '/'), payload, option);
    return { data };
  } catch (e) {
    return { error: e };
  }
};
const asyncPut = async (
  uri: string,
  payload?: any,
  option?: AxiosRequestConfig
) => {
  try {
    const { data } = await Api.put(uri.replace(/\/+/g, '/'), payload, option);
    return { data };
  } catch (e) {
    return { error: e };
  }
};
const asyncPatch = async (
  uri: string,
  payload?: any,
  option?: AxiosRequestConfig
) => {
  try {
    const { data } = await Api.patch(uri.replace(/\/+/g, '/'), payload, option);
    return { data };
  } catch (e) {
    return { error: e };
  }
};
const asyncDelete = async (uri: string, option?: AxiosRequestConfig) => {
  try {
    const data = await Api.delete(uri.replace(/\/+/g, '/'), option);
    return { data };
  } catch (e) {
    return { error: e };
  }
};
//request  interceptor
Api.interceptors.request.use(
  async function (config) {
    // const token = await getToken();
    // config.headers.Authorization = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//  response interceptor
Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(
      error?.response ? error?.response?.data : error.response
    );
  }
);

export { asyncGet, asyncPost, asyncDelete, asyncPatch, asyncPut };
