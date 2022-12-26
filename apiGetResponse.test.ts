import{expect, test } from '@playwright/test';

test("api get response", async ({request})=>{
    const response = await request.get('https://dummy.restapiexample.com/api/v1/employee/1', {
    })
    const respBody = JSON.parse(await response.text())
    console.log(respBody)
})