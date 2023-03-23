import "./Projects.css";
import meeting from "../../img/digital-marketing-meeting.jpg";
import image2 from "../../img/image2.webp";
import image3 from "../../img/image3.webp";
import image4 from "../../img/image4.webp";

function Projects() {
    return (
        <section id="projects">
            <h1>I've worked on:</h1>
            <div className="projects-container">
                <div className="first-project">
                    <div className="card dark-card">
                        <a href="https://nuketurtle.github.io/horiseon-marketing/" target="_blank" rel="noreferrer">
                            <img src={meeting} alt="Digital marketing meeting" />
                        </a>
                        <h3>Horiseon Marketing and SEO</h3>
                        <p>A client, a marketing agency has hired me to refactor an existing site to make it more accessible.</p>
                    </div>
                </div>
                <div className="projects-row">
                    <div className="projects-column">
                        <div className="card">
                            <img src={image2} alt="Test" />
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur neque tempore cupiditate eveniet eos rem consequuntur exercitationem esse debitis culpa, assumenda totam nesciunt rerum? Nostrum doloremque eum dicta necessitatibus?</p>
                        </div>
                        <div className="card dark-card">
                            <img src={image3} alt="Test" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid? Ea totam sit quos maiores exercitationem voluptates officia itaque, deleniti accusantium, ipsum nostrum, repellat quasi fuga cumque sequi dolore commodi!</p>
                        </div>
                    </div>
                    <div className="projects-column">
                        <div className="card">
                            <img src={image4} alt="Test"/>
                            <img src="" alt="Test" />
                            <h3>Lorem ipsum dolor sit</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere facilis debitis magni repellendus dolore, eveniet pariatur iste nihil officiis ducimus inventore iusto nam molestias accusantium quasi laborum consectetur perspiciatis.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default Projects;