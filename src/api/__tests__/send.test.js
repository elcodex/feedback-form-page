import { sendData } from "../send";

jest.mock("../requests");

let postData = require("../requests").postData;

describe("Testing validation inputs", () => {

    test("All fields are empty", async () => {
        postData.mockImplementation(async () => ({ status: 400 }));
        const responseString = await sendData({});
        expect(responseString).toHaveProperty("error");
        expect(responseString.error).toMatch(/Name.+Email.+Message/);
    });

    test("Field Name is empty", async () => {
        postData.mockImplementation(async () => ({ status: 400 }));
        const responseString = await sendData({email: "email", message: "message"});
        expect(responseString).toHaveProperty("error");
        expect(responseString.error).toMatch(/Name/);
        expect(responseString.error).not.toMatch(/(Email|Message)/);
    });

    test("Field Email is empty", async () => {
        postData.mockImplementation(async () => ({ status: 400 }));
        const responseString = await sendData({name: "name", message: "message"});
        expect(responseString).toHaveProperty("error");
        expect(responseString.error).toMatch(/Email/);
        expect(responseString.error).not.toMatch(/(Name|Message)/);
    });

    test("Field Message is empty", async () => {
        postData.mockImplementation(async () => ({ status: 400 }));
        const responseString = await sendData({name: "name", email: "email"});
        expect(responseString).toHaveProperty("error");
        expect(responseString.error).toMatch(/Message/);
        expect(responseString.error).not.toMatch(/(Name|Email)/);
    });

    test("Two fields are empty", async () => {
        postData.mockImplementation(async () => ({ status: 400 }));
        
        for (let values of [
            ["name", "email", "message"],
            ["name", "message", "email"],
            ["email", "message", "name"]
        ]) {
            const responseString = await sendData({[values[2]]: "text"});
            expect(responseString).toHaveProperty("error");
            expect(responseString.error).toMatch(new RegExp(`${values[0]}.+${values[1]}`, "i"));
            expect(responseString.error).not.toMatch(new RegExp(values[2], "i"));
        }
    });

    test("All fields are filled", async () => {
        postData.mockImplementation(async () => ({ status: 200, ok: true }));
        const responseString = await sendData({name: "name", message: "message", email: "email"});
        expect(responseString).toBeUndefined();
    });
});