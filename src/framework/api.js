import _ from "lodash";
import http from "axios";
import { endpoint } from "../framework/config";
class OneAppAPI {
  static headers() {
    return {
      "Content-Type": "application/json",
    };
  }
  static get(route, headers, otherHost, key) {
    return this.api({ requestType: "get", route, headers, otherHost, key });
  }
  static post(route, headers, params, data) {
    return this.api({ requestType: "post", route, headers, params, data });
  }
  static api({ requestType, route, headers, params, data, otherHost, key }) {
    const url = `${endpoint.API_END_POINT}${route}`;
    console.log(url)
    const baseHeaders = OneAppAPI.headers();
    const axiosInstance = http.create({
      baseURL: url,
      headers: headers ? Object.assign({}, baseHeaders, headers) : baseHeaders,
      method: requestType,
      params: params ? params : {},
      data: data ? data : {},
    });

    if (requestType === "get" || requestType === "delete") {
      return axiosInstance
        .get(url, {})
        .then((response) => {
          if (url.includes("guestlogin")) {
            return response;
          }

          return response.data;
        })
        .catch((err) => {
          throw err;
        });
    } else {
      return axiosInstance
        .post(url, data)
        .then((response) => {
          if (url.includes("guestlogin")) {
            return response;
          }
          return response;
        })
        .catch((err) => {
          throw err;
        });
    }
  }
}

export default OneAppAPI;
