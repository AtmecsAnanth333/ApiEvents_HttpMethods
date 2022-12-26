import{expect, test } from '@playwright/test';

test("api get response", async ({request})=>{
    const response = await request.get('https://reqres.in/', {
        params:{

        }
    })
    console.log(await response.json());
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({
        result:[{}]
    })
})