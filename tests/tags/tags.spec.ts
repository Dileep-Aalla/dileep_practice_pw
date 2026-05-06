import { test, expect } from "@playwright/test";
test.describe("Group-1 Tests", async () => {
  test("Group1-test1", { tag: "@smoke" }, async () => {
    console.log("Group1-test1 Executing");
  });
  test("Group1-test2", { tag: "@sanity" }, async () => {
    console.log("Group1-test1 Executing");
  });
});
test.describe("Group-2 Tests", async () => {
  test("Group1-test1", { tag:['@smoke','@regression']}, async () => {
    console.log("Group2-test1 Executing");
  });
  test("Group1-test2", { tag: "@sanity" }, async () => {
    console.log("Group2-test2 Executing");
  });
});