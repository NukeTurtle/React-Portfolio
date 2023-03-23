import "./Footer.css";

function Footer() {
    return (
        <footer>
            <h1>Stalk Me</h1>
            <div id="socials">
                <a href="mailto:stiglic.elvis@gmail.com?subject=Let's collab (from Portfolio)">
                    <i className="fa-regular fa-envelope"></i>
                </a>
                <a href="">
                    <i className="fab fa-github"></i>
                </a>
                <a href="">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p>Created with ❤️ and ☕ by Elvis</p>
        </footer>
    )
}

export default Footer;