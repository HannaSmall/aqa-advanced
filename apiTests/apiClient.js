const axios = require("axios");

const apiClient = axios.create();

apiClient.interceptors.request.use(
    (config) => {
        console.log(
            `[REQUEST] ${config.method.toUpperCase()} ${config.url}`
        );

        return config;
    },
    (error) => {
        console.error("[REQUEST ERROR]", error.message);

        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        console.log(
            `[RESPONSE] ${response.status} ${response.config.url}`
        );

        return response;
    },
    (error) => {
        console.error(
            `[RESPONSE ERROR] ${error.response?.status ?? "No status"}`
        );

        return Promise.reject(error);
    }
);

module.exports = apiClient;