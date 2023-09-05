import { message } from 'antd';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import useRedirect from './redirect';
const url: string = '';
interface ResponseInteface {
  data: any;
  status: boolean;
  message: string;
}
interface ApiResponse {
  data?: any;
  error?: any;
}

class HttpClient {
  async get(url: string, options?: AxiosRequestConfig): Promise<any> {
    const request = async () =>
      await this.axios().get<ApiResponse>(url, options);
    try {
      const { data } = await request();
      return { data };
    } catch (e: any) {
      return { error: e?.response?.data };
    }
  }

  async post(
    url: string,
    payload?: any,
    options?: AxiosRequestConfig
  ): Promise<any> {
    try {
      const { data } = await this.axios().post<ApiResponse>(
        url,
        payload,
        options
      );

      return { data };
    } catch (e: any) {
      return { error: e.response?.data ? e.response.data : e.response };
    }
  }

  async put(
    url: string,
    payload?: any,
    options?: AxiosRequestConfig
  ): Promise<any> {
    try {
      const { data } = await this.axios().put<ApiResponse>(
        url,
        payload,
        options
      );
      return { data };
    } catch (e: any) {
      return { error: e.response?.data ? e.response.data : e.response };
    }
  }

  async delete<T>(url: string, options?: AxiosRequestConfig): Promise<any> {
    try {
      const { data } = await this.axios().delete<T>(url, options);
      return { data };
    } catch (e: any) {
      return { error: e.response?.data ? e.response.data : e.response };
    }
  }

  axios() {
    const request = axios.create({
      // baseURL: "",
      baseURL: process.env.sourceApi,
    });

    request.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    request.interceptors.response.use(
      function (response) {
        console.log(response);
        if (response?.status == 401) {
          message.success('session expired');
          window.location.href = '/';
        }
        return response;
      },
      function (error) {
        console.log(error.response);
        if (error?.response?.status == 401 && error?.config?.url !== 'login') {
          message.success('session expired');
          // window.location.href = '/'
        }
        return Promise.reject(error);
      }
    );

    return request;
  }
}

const httpClient = (): HttpClient => {
  return new HttpClient();
};
const httpOnly = (): AxiosInstance => {
  const plainAxios: AxiosInstance = axios.create({
    // baseURL: "http://localhost:2200/",
    baseURL: process.env.sourceApi,
    timeout: 1000,
  });
  plainAxios.interceptors.request.use(
    (res) => {
      return res;
    },
    (err) => {
      return err;
    }
  );
  plainAxios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return err;
    }
  );

  return plainAxios;
};

export { httpOnly, httpClient };
