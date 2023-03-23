import React from "react";

class Menu extends React.Component {
    render() {
            return (
                <div className="menu">
                <ul className="menu_list">
                    <a href="#bio"><li><i className="fa-regular fa-user"></i>about me</li></a>
                    <a href="#skills"><li><i className="fas fa-book"></i>skills</li></a>
                    <a href="#projects"><li><i className="fas fa-tasks"></i>projects</li></a>
                    <a href="#contact_form"><li><i className="fab fa-wpforms"></i>contact form</li></a>
                </ul>
                <div className="hamburger_menu" onClick="menuToggle()">
                    <div className="menu_lines">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            )
        }
    }
export default Menu;