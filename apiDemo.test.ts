import{expect, test } from '@playwright/test';

test("api get response", async ({request})=>{
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
    })
    const respBody = JSON.parse(await response.text())
    console.log(respBody)
})