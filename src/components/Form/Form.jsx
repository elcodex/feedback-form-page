import Input from "../Input/Input";
import { useState, useReducer } from "react";
import { sendData } from "../../api/send";
import FileSelector from "../FileSelector/FileSelector";

import "./css/form.css";
import "./css/form.mobile.css";

function getFiles(state, files) {
    let arr = [];

    for (let i = 0; i < files.length; i++) {
        arr.push(files[i]);
    }

    return arr;
}

export default function Form() {

    const [isSending, setIsSending] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [files, setFiles] = useReducer(getFiles, []);

    const [error, setError] = useState("");

    async function handleSend(event) {
        event.preventDefault();

        setIsSending(true);
        setError("");

        const responseString = await sendData({name, email, message, files});
        if (responseString?.error) {
            setError(responseString.error);
        }
        setIsSending(false);
    }

    return (
        <div className="form">
            <div className="form__fields">
                <div className="form__inputs">
                    <Input id="name-input" type="input" label="Name" isRequired={true} setValue={setName} focus={true} />
                    <Input id="email-input" type="input" label="Email Address" isRequired={true} setValue={setEmail} />
                    <Input id="message-input" type="textarea" label="Your Message" isRequired={true} setValue={setMessage} />
                </div>
                <div className="form__files">
                    <FileSelector setFiles={setFiles} />
                </div>
            </div>

            {error && <p>{error}</p>}

            <button className="form__button" onClick={handleSend} disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
            </button>
        </div>
    )
}