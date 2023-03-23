import MenuToggle from '../MenuToggle/MenuToggle.jsx';
import Scroll from '../Scroll/Scroll.jsx';
import "./Header.css";

function Header() {
    return (
        <header id="main_header_container">
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="main_header">
                <div className="profile"></div>
                <span>Hello, I'm Elvis</span>
                <span>an inspiring web developer</span>
            </div>
            <MenuToggle></MenuToggle>
            <Scroll></Scroll>
        </header>
    )
}

export default Header;