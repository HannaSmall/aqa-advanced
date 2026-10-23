jest.mock("axios");

const axios = require("axios");
const { getUser } = require("./mockedApiService");

describe("getUser with mocked Axios", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("возвращает пользователя при успешном запросе", async () => {
        const mockedUser = {
            id: 1,
            name: "Anna",
            email: "anna@example.com"
        };

        axios.get.mockResolvedValue({
            status: 200,
            data: mockedUser
        });

        const result = await getUser(1);

        expect(axios.get).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        expect(result).toEqual(mockedUser);
    });

    test("обрабатывает ошибку неудачного запроса", async () => {
        axios.get.mockRejectedValue(
            new Error("Network Error")
        );

        await expect(getUser(1)).rejects.toThrow(
            "Failed to fetch user: Network Error"
        );
    });
});