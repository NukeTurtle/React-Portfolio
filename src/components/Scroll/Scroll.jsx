import "./Scroll.css";

function Scroll() {
    return (
        <div className="scroll_button">
            <span>SCROLL DOWN</span>
            <div className="arrow">
                <span className="left_arrow"></span>
                <span className="right_arrow"></span>
            </div>
        </div>
    )
}

export default Scroll;