import { postData } from "./requests";
import { ERRORS } from "./errors";

export async function sendData({name = "", email = "", message = "", files = []}) {
    if (files.length) {
        const filesSizes = files.reduce((sum, {size}) => sum + size, 0);
        if (filesSizes > 1024 * 2) {
            return {error: ERRORS.FILE_SIZE}
        }
    }

    const formData = new FormData();
    formData.append("test_name", name);
    formData.append("test_email", email);
    formData.append("test_message", message);

    files.forEach(file =>
        formData.append("test_file", file)
    );

    const response = await postData(formData);

    if (!response.ok) {
        console.log(response.status);
        if (response.status >= 500) {
            return {error: ERRORS.SERVER}
        }

        if (response.status === 400) {
            console.log(400);
            return {error: await response.text()}
        }

        return {eror: ERRORS.GLITCH}
    }
}