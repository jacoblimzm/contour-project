const request = require("supertest");
const app = require("../app");


test("Test GET all accounts", async () => {
    const response = await request(app).get("/api/accounts");
    // console.log(response)
    expect(response.statusCode).toBe(200)
    
})

test("Test GET individual transaction information", () => {
    return request(app)
    .get("/api/accounts/1/transactions/1")
    .expect("Content-Type", /json/)
    .expect(200)
    
})

test("Test GET account transactions list", () => {
    return request(app)
    .get("/api/accounts/1/transactions")
    .expect("Content-Type", /json/)
    .expect(200)
    
})

test("Test GET individual account details", () => {
    return request(app)
    .get("/api/accounts/1/")
    .expect("Content-Type", /json/)
    .expect(200)
    
})

