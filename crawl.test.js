const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL protocol", () => {
  const input = "https://google.com/path";
  const actual = normalizeURL(input);
  const expected = "google.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip protocol", () => {
  const input = "https://google.com/path/";
  const actual = normalizeURL(input);
  const expected = "google.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://ACCOUNTS.google.com/path";
  const actual = normalizeURL(input);
  const expected = "accounts.google.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http", () =>{
  const input = "http://accounts.google.com/path";
  const actual = normalizeURL(input);
  const expected = "accounts.google.com/path";
   expect(actual).toEqual(expected);
})