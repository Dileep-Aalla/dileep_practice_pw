import { test, expect } from "@playwright/test";
//test.only() ==> It will execute only particular test case by skipping all other test cases. 
//test.skip() ==> It will skip the particular test case and execute all other test cases.
//test.fail() ==> I'm expecting a particular test case to be failed. Highlight this test case if it is not failed. 
//test.fixme() ==> I am sure this test case is not working. Please ignore even if it is failed. 
//test.slow() ==> Playwright will consider that there are loading issues, and it may face slowness in the test execution. It can increase the timeout 3x more than the normal timeout. 

test.describe("Group-1 -Tests", async () => {
  test.fail("Group 1 -tes 1", async () => {
    console.log("Group 1,test 1 Excuting...!");
    expect(1).toBe(2)
  });
  test("Group 1 -tes 2", async () => {
    test.setTimeout(1000)
    console.log("Group 1,test 2 Excuting...!");
        await new Promise(resolve => setTimeout(resolve, 1000));//wait for 100 seconds    
  });
});
test.describe("Group-2 -Tests", async () => {
  test("Group 2 -test 1", async () => {
    console.log("Group 2,test 1 Excuting...!");
  });
  test("Group 2 -tes 2", async () => {
    console.log("Group 2,test 2 Excuting...!");
  });
});
