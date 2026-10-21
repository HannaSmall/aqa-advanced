const test = require("node:test");
const assert = require("node:assert/strict");
//const axios = require("axios");
const axios = require("./apiClient");

test("GET /posts/1 — получение публикации", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    assert.equal(response.status, 200);

    assert.equal(response.data.id, 1);
    assert.equal(response.data.userId, 1);
    assert.equal(typeof response.data.title, "string");
    assert.equal(typeof response.data.body, "string");
});

test("GET /users/1 — получение пользователя", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    assert.equal(response.status, 200);

    assert.equal(response.data.id, 1);
    assert.equal(response.data.name, "Leanne Graham");
    assert.equal(response.data.username, "Bret");
    assert.equal(response.data.email, "Sincere@april.biz");
    assert.equal(typeof response.data.address, "object");
});

test("GET /posts?userId=1 — получение публикаций пользователя", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            params: {
                userId: 1
            }
        }
    );

    assert.equal(response.status, 200);

    assert.equal(Array.isArray(response.data), true);
    assert.equal(response.data.length, 10);

    assert.equal(
        response.data.every((post) => post.userId === 1),
        true
    );
});

test("POST /posts — создание публикации", async () => {
    const newPost = {
        title: "API testing homework",
        body: "Learning API testing with Axios",
        userId: 1
    };

    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
    );

    assert.equal(response.status, 201);

    assert.equal(response.data.id, 101);
    assert.equal(response.data.title, newPost.title);
    assert.equal(response.data.body, newPost.body);
    assert.equal(response.data.userId, newPost.userId);
});

test("POST /comments — создание комментария", async () => {
    const newComment = {
        postId: 1,
        name: "API homework comment",
        email: "anna@example.com",
        body: "This comment was created with Axios"
    };

    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        newComment
    );

    assert.equal(response.status, 201);

    assert.equal(response.data.id, 501);
    assert.equal(response.data.postId, newComment.postId);
    assert.equal(response.data.name, newComment.name);
    assert.equal(response.data.email, newComment.email);
    assert.equal(response.data.body, newComment.body);
});