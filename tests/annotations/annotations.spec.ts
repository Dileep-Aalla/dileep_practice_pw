import { test, expect } from "@playwright/test";
// This test suite is for testing annotations in Playwright.
test.describe("Group-1 -Tests", async () => {
  test("Group 1 -tes 1", async () => {
    console.log("Group 1,test 1 Excuting...!");
  });
  test("Group 1 -tes 2", async () => {
    console.log("Group 1,test 2 Excuting...!");
  });
});
test.describe("Group-2 -Tests", async () => {
  test("Group 2 -test 1", async () => {
    console.log("Group 2,test 1 Excuting...!");
  });
  test("Group 1 -tes 2", async () => {
    console.log("Group 2,test 2 Excuting...!");
  });
});
