import "./Skills.css";

function Skills() {
    return (
        <section id="skills">
            <h1>What I do</h1>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-code fa-5x"></i>
                        <h3>development</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta labore unde voluptatum magni. Dolor obcaecati quis velit ad sequi, minima voluptates ex mollitia ipsum beatae eius fugiat minus omnis!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-paint-brush fa-5x"></i>
                        <h3>design</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, reprehenderit dignissimos animi tempora in, necessitatibus aliquam dolor beatae blanditiis, odio voluptatem inventore corrupti perferendis fugit at rem maiores ullam nisi?</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <i className="far fa-lightbulb"></i>
                        <h3>open source</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas, illo animi fuga repudiandae adipisci reprehenderit enim, vitae ratione esse veniam veritatis officia tempora ducimus ut quia! Quisquam, reprehenderit ad.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-globe fa-5x"></i>
                        <h3>networking</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste amet accusantium, ipsum velit reprehenderit optio quaerat sit, repellat quae aut. Pariatur obcaecati aperiam voluptatibus dignissimos quia rerum dolores doloremque.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;