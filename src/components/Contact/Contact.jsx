import "./Contact.css";

function Contact() {
    return (
        <section id="contact_form">
            <i className="fa fa-paper-plane fa-5x"></i>
            <h1>Are you interested?</h1>
            <span>Wether you have a project or just want to say hi</span><br />
            <span>Feel free to shoot me a message</span><br />
            <a href="mailto:stiglic.elvis@gmail.com?subject=Let's collab (from Portfolio)">
                <button>Message Me</button>
            </a>
        </section>
    )
}

export default Contact;