import { test, expect } from '@playwright/test';
import { log } from 'node:console';
import { sourceMapsEnabled } from 'node:process';

  test("Css selectors Syntax",async({page})=>{
    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.waitForLoadState('networkidle')
      // 2.verify application logo is displayed
      const logo = await page.locator('img.logo')
      await expect(logo).toBeVisible()
    // 3.Verify application caption displayed as "Experience the difference"
    const caption = await page.locator('p.caption')
    let expectCaption ="Experience the difference"
    let actualCaption =  await caption.textContent()
    await expect(actualCaption).toBe(expectCaption)
     console.log("Caption is displayed successfully. ");
     // 4.Enter invalid username
     let userName= await page.locator("input[name=username]")
     await userName.fill("InvalidUsernmae")
     console.log('Invalid user Name Entered')
      // 5.Enter empty Password
      let passWord = await page.locator("input[name=password]")
      await passWord.fill('')
      console.log('Empty password Entered')

      //highlight the login button
      const loginButton = await page.locator('input[value="Log In"]')
      await loginButton.focus()
      // 6.Click on login button
        await loginButton.click()
    // 7.Verify the error message "Please enter a username and password."
    const errorMessage = await page.locator('p.error')
    let expectedErrorMessage ='Please enter a username and password.'
    let actualErrorMessage = await errorMessage.textContent()
    await expect(actualErrorMessage).toBe(expectedErrorMessage)
     // 14.Click on services page link  
    await page.getByRole('link', { name: 'Services' }).first().click(); 
    await page.waitForLoadState('networkidle')
   // click on Admin Page Link
   let adminLink = page.getByRole('link', { name: 'Admin' })
   await adminLink.click();
   await page.waitForLoadState('networkidle')
   await selectDbMode(page,'restxml')
  })
 // Create Function for radio Buttion
 async function selectDbMode(page:any,option:string){
  let radioButtion = await page.locator(`input[value=${option}]`)
  await radioButtion.check()
 }