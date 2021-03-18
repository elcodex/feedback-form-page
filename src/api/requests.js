export async function postData(formData) {
    return fetch("https://beryl-boggy-ceiling.glitch.me/email", {
        method: "POST",
        body: formData
    });
}