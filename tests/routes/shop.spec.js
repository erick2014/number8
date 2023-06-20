const request = require("supertest");
const app = require("../../app.js");
const sinon = require("sinon");
const expect = require("chai").expect;
const ShopController = require("../../src/controllers/shopController.js")
const {mockedShops} = require("../mocks/shop.mock.js")

describe("Shop routes", () => {
  after(() => {
    sinon.restore();
  });

  it("GET /shop", async () => {
    const mockShopController = sinon.stub(ShopController.prototype,"getShops")
    mockShopController.callsFake(()=>{
      return Promise.resolve(mockedShops)
    });
    const response = await request(app).get("/shop");
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(mockedShops)
  });
});
