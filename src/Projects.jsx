import './css-files/projects.css'
import FlipIn from './FlipIn'
import { ImagesSlider } from './ImagesSlider';
import slides from './slides.json'


function Projects() {
    return (
        <section id="projects">
            
    <div className="projects-container">
    <FlipIn>
      <div className="projects-box">
        <h2 className="projects-heading">PROJECTS</h2>
      </div>
      </FlipIn>
      </div>
      <div className="images-slider-container">
      <ImagesSlider slides={slides}/>
    </div>
  
        </section>
    )
}

export default Projects;