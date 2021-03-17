import Form from "../Form/Form";
import "./css/main.css";
import "./css/main.mobile.css";

export default function Main() {
    return (
        <main className="main">
            <div className="main__contactus">
                <h1 className="contactus__header">
                    <span className="contactus__header__text">Get In Touch</span>
                </h1>
                <p className="contactus__text">Leave us a message</p>
                <Form />
            </div>
        </main>
    )
}