const request = require("supertest"); //supertest testing library
const app = require("../app"); //our app.js that listens for requests

describe("Test GET /users", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("it should return an array", async () => {
    const response = await request(app)
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(Array.isArray(response.body.users)).toBe(true);
  });

  test("Catch empty field", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "",
      })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "empty data",
    });
  });
});

describe("Test POST /users", () => {
  test("It should respond with 201", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "someName",
      })
      .expect("Content-Type", /json/)
      .expect(201);
    expect(response.body).toStrictEqual({
      message: "new user created!",
    });
  });

  test("It should throw an error if no data is sent", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "",
      })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "empty data",
    });
  });
});

describe("Test PUT /users", () => {
  test("Should update user by ID, returning a 200 status code", async () => {
    const response = await request(app)
      .put("/users/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toStrictEqual({
      data: "user updated succesfully",
    });
  });

  test("return error if no user is found with id provided with status 404", async () => {
    const response = await request(app)
      .put("/users/123")
      .expect("Content-Type", /json/)
      .expect(404);
    expect(response.body).toStrictEqual({
      error: "no user found",
    });
  });
});

describe("Test DELETE /users", () => {
  test("Should delete user and status return code 200", async () => {
    const response = await request(app)
      .delete("/users/0")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body).toStrictEqual({
      message: "user deleted!",
    });
  });

  test("return error if no user is found with id provided with status 404", async () => {
    const response = await request(app)
      .delete("/users/123")
      .expect("Content-Type", /json/)
      .expect(404);
    expect(response.body).toStrictEqual({
      error: "no user found",
    });
  });
});
