// custom
import { store } from "../redux/store";
  
  export abstract class BaseService {
    constructor(alternativeBaseUrl) {
      this.axiosRequestConfig = {
        baseURL: alternativeBaseUrl
          ? alternativeBaseUrl
          : (process.env.REACT_APP_BASE_RASAD_URL),
      };
      this.axiosInstance = Axios.create(this.axiosRequestConfig);
    }
  
    baseUrl = "";
  
    private static token = null;
    protected axiosInstance;
    protected axiosRequestConfigDefault = {
      baseURL: this.baseUrl,
      headers: { "Content-Type": "application/json" },
    };
  
    private _axiosRequestConfig =
      this.axiosRequestConfigDefault;
  
    get axiosRequestConfig() {
      return this._axiosRequestConfig;
    }
  
    set axiosRequestConfig(config) {
      if (config.headers) {
        config.headers = {
          ...this._axiosRequestConfig.headers,
          ...config.headers,
        };
      }
      this._axiosRequestConfig = { ...this._axiosRequestConfig, ...config };
    }
  
    get axiosInstanceWithoutToken() {
      let axiosInstanceWithoutToken = this.axiosInstance;
  
      axiosInstanceWithoutToken.interceptors.response.use(
        function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response;
        },
        function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error);
        }
      );
  
      return axiosInstanceWithoutToken;
    }
  
    get axiosInstanceWithToken() {
      let token = BaseService.token;
  
      let axiosInstanceWithToken;
  
      if (BaseService.token === null) {
        token = store.getState().token;
        if (token) BaseService.setToken(token);
      }
  
      if (token) {
        this.axiosRequestConfig = {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        };
        axiosInstanceWithToken = Axios.create({
          ...this.axiosRequestConfig,
        });
      } else {
        axiosInstanceWithToken = this.axiosInstance;
      }
  
      axiosInstanceWithToken.interceptors.response.use(
        function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response;
        },
        function (error) {
          if (error.response.status === 401 || error.response.status === 403) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/rasad/login";
          }
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error);
        }
      );
  
      return axiosInstanceWithToken;
    }
  
    private static setToken(token) {
      BaseService.token = token;
    }
  
    static removeToken() {
      BaseService.token = null;
    }
  
    static msgRequestCanceled = "request-canceled";
    static cancelTokenSource() {
      return Axios.CancelToken.source();
    }
  }
  