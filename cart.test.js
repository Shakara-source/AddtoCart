process.env.NODE_ENV = "test";
const { response } = require("express");
const request = require("supertest");
const app = require("../app");
let cart = require("../cart.json");
let imac = { name: "imac", price: 1600 };

beforeEach(function() {
  cart.push(imac);
});

afterEach(function() {
  cart.length = 0;
});

describe("GET /items", async function(){
    test("view cart", function(){ 
      const resp = await request(app).get(`/items`);
      expect(resp.statusCode).toBe(200);
      expect(resp.body).toEqual({cart: [{ name: "imac", price: 1600 }]});
    
    })
  })
describe("POST /items", async function(){
  test('adds passed item into cart', function(){
    const resp = await response(app).post('/items').send({name: "iphone", price: 900})
    expect(resp.statusCode).toBe(201)
    expect(resp.body).toEqual({
      cart: {name: "iphone", price: 900}
    })
  })
})

describe('PATCH /items/:item', async function(){
  test('edits item in cart', function(){
    const resp = await response(app).patch(`/items/${imac.name}`).send({name:'imac color', price: 1900})
    expect(resp.statusCode).toBe(200)
    expect(resp.body).toEqual({
      cart: {name:'imac color', price: 1900}
    })
  })
  test("Responds with 404 if name invalid", async function() {
    const resp = await request(app).patch(`/cats/0`);
    expect(resp.statusCode).toBe(404);
  });
})

describe("DELETE /items/:name", function() {
    test("Deletes single item from cart", async function() {
      const resp = await request(app).delete(`/items/${imac.name}`);
      expect(resp.statusCode).toBe(200);
      expect(resp.body).toEqual({ message: "Deleted" });
    });
  });