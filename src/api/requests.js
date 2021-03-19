export async function postData(formData) {
    return fetch("/email", {
        method: "POST",
        body: formData
    });
}