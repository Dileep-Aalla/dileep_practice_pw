import { test, expect } from "@playwright/test";
test.describe("Group1 tests", async () => {
  test("Group1-test1", async () => {
    console.log("Group1-test1 Executing..!");
  });
  test("Group1-test2", async () => {
    console.log("Group1-test2 Executing..!");
  });
  test("Group1-test3", async () => {
    console.log("Group1-test3 Executing..!");
  });
  test.beforeAll(async () => {
    console.log(
      "***Group before all : This runs once before all test cases. ****",
    );
  });
  test.afterAll(async () => {
    console.log(
      "***Group after all : This runs once after all test cases. ****",
    );
  });
  test.beforeEach(async () => {
    console.log(
      "---Group before each : This runs once before each test cases.---",
    );
  });
  test.afterEach(async () => {
    console.log(
      "---Group after each : This runs once after each test cases.---",
    );
  });
});
test.describe("Group2 tests", async () => {
  test("Group2-test1", async () => {
    console.log("Group2-test1 Executing..!");
  });
  test("Group2-test2", async () => {
    console.log("Group2-test2 Executing..!");
  });
  test("Group2-test3", async () => {
    console.log("Group2-test3 Executing..!");
  });
});
