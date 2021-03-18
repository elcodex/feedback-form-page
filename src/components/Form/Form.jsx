import Input from "../Input/Input";
import { useState, useReducer } from "react";
import { sendData } from "../../api/send";
import FileSelector from "../FileSelector/FileSelector";

import "./css/form.css";
import "./css/form.mobile.css";

export default function Form() {

    const [isSending, setIsSending] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [files, setFiles] = useReducer(getFiles, []);

    const [dataError, setDataError] = useState("");
    const [sendError, setSendError] = useState("");

    function getFiles(state, files) {
        let arr = [];

        for (let i = 0; i < files.length; i++) {
            arr.push(files[i]);
        }

        return arr;
    }

    async function handleSend(event) {
        event.preventDefault();

        setIsSending(true);
        setDataError("");
        setSendError("");

        const missingRequiredData = [];
        if (!name) {
            missingRequiredData.push("name");
        }
        if (!email) {
            missingRequiredData.push("email");
        }
        if (!message) {
            missingRequiredData.push("message");
        }
        if (missingRequiredData.length) {
            setIsSending(false);
            setDataError(`Please fill ${missingRequiredData.join(", ")}.`);
            return;
        }

        const responseString = await sendData({name, email, message, files});
        if (responseString.error) {
            setSendError(responseString.error);
        }
        setIsSending(false);
    }

    return (
        <div className="form">
            <div className="form__fields">
                <div className="form__inputs">
                    <Input id="name_1" type="input" label="Name" isRequired={true} setValue={setName} focus={true} />
                    <Input id="email_2" type="input" label="Email Address" isRequired={true} setValue={setEmail} />
                    <Input id="message_3" type="textarea" label="Your Message" isRequired={true} setValue={setMessage} />
                </div>
                <div className="form__files">
                    <FileSelector setFiles={setFiles} />
                </div>
            </div>

            {dataError && <p>{dataError}</p>}
            {sendData && <p>{sendError}</p>}

            <button className="form__button" onClick={handleSend} disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
            </button>
        </div>
    )
}