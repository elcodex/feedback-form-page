import { render, act, screen, cleanup, fireEvent } from '@testing-library/react';
import Form from '../Form/Form';

jest.mock("../../api/requests");
afterEach(cleanup);

let postData = require("../../api/requests").postData;

describe("Testing Form", () => {
    test("button Send to be on form", async () => {
        await act(async () => {
            render(<Form />);
        });

        expect(screen.getByRole("button", {name: "Send"})).toBeEnabled();
    });

    test("input value in field Name", async () => {
        await act(async () => {
            render(<Form />);
        });

        let nameInput = await screen.findByLabelText(/Name/);
        fireEvent.change(nameInput, { target: { value: 'my name' } })
        expect(nameInput.value).toEqual("my name");
    });

    test("Send not all required data", async () => {
        postData.mockImplementation(async () => ({ status: 400 }));
        await act(async () => {
            render(<Form />);
        });

        let nameInput = await screen.findByLabelText(/Name/);
        fireEvent.change(nameInput, { target: { value: 'my name' } })
        
        let sendButton = await screen.findByRole("button", {name: "Send"});
        fireEvent.click(sendButton);

        await screen.findByText(/Email.+Message/);

        expect(screen.getByText(/Email.+Message/)).toBeInTheDocument();
    });

    test("Send all required data", async () => {
        postData.mockImplementation(async () => ({ status: 200, ok: true }));
        await act(async () => {
            render(<Form />);
        });

        let nameInput = await screen.findByLabelText(/Name/);
        fireEvent.change(nameInput, { target: { value: 'my name' } });
        let emailInput = await screen.findByLabelText(/Email/);
        fireEvent.change(emailInput, { target: { value: 'my email' } })
        let messageInput = await screen.findByLabelText(/Message/);
        fireEvent.change(messageInput, { target: { value: 'my message' } })
        
        let sendButton = await screen.findByRole("button", {name: "Send"});
        await act(async () => 
            fireEvent.click(sendButton)
        )
        
        expect(screen.queryByText(/(fill|error)/)).not.toBeInTheDocument();
        expect(sendButton).toBeEnabled();
    });
})