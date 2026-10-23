const axios = require("axios");

async function requestInvalidUrl() {
    try {
        await axios.get(
            "https://jsonplaceholder.typicode.com/invalid-endpoint"
        );

        return "Request completed successfully";
    } catch (error) {
        if (error.response) {
            return `Request failed with status ${error.response.status}`;
        }

        return `Request failed: ${error.message}`;
    }
}

async function sendRequestWithHeadersAndParams() {
    return axios.get("https://httpbin.org/get", {
        headers: {
            "X-Test-Header": "aqa-homework"
        },
        params: {
            userId: 1,
            status: "active"
        }
    });
}

module.exports = {
    requestInvalidUrl,
    sendRequestWithHeadersAndParams
};
