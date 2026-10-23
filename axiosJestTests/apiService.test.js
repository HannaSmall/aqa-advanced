const {
    requestInvalidUrl,
    sendRequestWithHeadersAndParams
} = require("./apiService");

test("возвращает правильное сообщение при запросе на неправильный URL", async () => {
    const result = await requestInvalidUrl();

    expect(result).toBe("Request failed with status 404");
});

test("отправляет кастомный header и URL-параметры", async () => {
    const response = await sendRequestWithHeadersAndParams();

    expect(response.status).toBe(200);

    expect(response.data.args).toEqual({
        userId: "1",
        status: "active"
    });

    expect(response.data.headers["X-Test-Header"]).toBe(
        "aqa-homework"
    );
});