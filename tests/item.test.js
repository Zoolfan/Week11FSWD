const app = require("../app");
const request = require("supertest");

describe("GET /items", () => {
	it("test get /items", (done) => {
		request(app)
			.get("/items")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				console.log(response.body);
				done();
			})
			.catch(done);
	});
});
