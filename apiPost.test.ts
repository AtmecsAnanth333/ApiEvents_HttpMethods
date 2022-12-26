import { test, chromium, expect,ElementHandle,Page, request } from "@playwright/test";

test("api put response", async ({request})=>{

    const response = await request.post('https://dummy.restapiexample.com/api/v1/create', {
           data: {
            "id": 333,
            "title": "Hi Ananth",
            "completed": true
          }
       })
    //    const respBody = JSON.parse(await response.text())
    //    console.log(respBody)
    //    expect(respBody.id).toBe(20)
    expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());
   })