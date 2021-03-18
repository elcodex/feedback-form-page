import { postData } from "./requests";
import { ERRORS } from "./errors";

export async function sendData({name = "", email = "", message = "", files = []}) {
    try {
        validate({name, email, message, files});

        const formData = new FormData();
        formData.append("test_name", name);
        formData.append("test_email", email);
        formData.append("test_message", message);
    
        files.forEach(file =>
            formData.append("test_file", file)
        );

        const response = await postData(formData);

        if (!response.ok) {
            if (response.status >= 500) {
                return {error: ERRORS.SERVER}
            }

            if (response.status === 400) {
                return {error: await response.text()}
            }

            return {error: ERRORS.GLITCH}
        }

    } catch (error) {
        return { error: error.message }
    }
}

function validate(data = {}) {
    // text validation
    let missingRequiredData = [];

    if (!data.name) {
        missingRequiredData.push("Name");
    }

    if (!data.email) {
        missingRequiredData.push("Email");
    }

    if (!data.message) {
        missingRequiredData.push("Message");
    }

    if (missingRequiredData.length) {
        throw new Error(`Please fill ${missingRequiredData.join(", ")}.`);
    }

    //files validation
    if (data.files?.length) {
        const filesSizes = data.files.reduce((sum, {size}) => sum + size, 0);
        
        if (filesSizes > 2 * 1024 * 1024) {
            throw new Error(ERRORS.FILE_SIZE);
        }
    }
}