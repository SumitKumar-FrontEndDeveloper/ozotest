const config = {
  dev: process.env.LOCAL,
  stage: process.env.STAGE,
  production: process.env.PRODUCTION,
  gaTrackingCode: process.env.GA_TRACKING_CODE,
  gaAddress: process.env.GA_SCRIPT_URL,
  loginRedirect: {
    dev: process.env.REDIRECT_LOGIN_DEV,
    stage: process.env.REDIRECT_LOGIN_STAGE,
    production: process.env.REDIRECT_LOGIN_PRODUCTION,
  },
  endpoint: {
    API_END_POINT: "http://used-book.in/usedbookbackend/public/api/v1",
    GET_TODO_LIST: "/getTaskList",
    UPDATE_TODO_TASK: "/updatetask",
    ADD_TODO_TASK: "/addTask",
  },
  defaultDelivery: {},
  serviceList: [],
};
module.exports = config;
