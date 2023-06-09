import '../src/css-files/skills.css'
import {AiFillHtml5,AiOutlineConsoleSql} from 'react-icons/ai';
import {DiCss3,DiJqueryLogo,DiReact} from 'react-icons/di'
import {SiMongodb,SiJavascript} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaNodeJs,FaPython,FaNode} from 'react-icons/fa'
import FadeInRight from './FadeInRight';
import FadeInLeft from './FadeInLeft';
import FlipIn from './FlipIn';

function Skills() {


    return(
       
        <section id="tools">
        <div className="tools-container">
        <FlipIn>
        <div  className="tools-box">
        <h2 className="tools-heading">TOOLS</h2>
        </div>
        </FlipIn>
        </div>
     <div className='container'>
     <div className='frontend-container'>
     <FadeInLeft>
        <div className="frontend-box ">
        <h2 className='tools-heading'>Front-End</h2>
        </div>
        <div className='skills-box-f '>
        <div className='skills-content-f'><h3 className='skills-heading'>Html</h3><AiFillHtml5 className='skills-icons'/></div>
        <div className='skills-content-f'><h3 className='skills-heading'>CSS</h3><DiCss3 className='skills-icons'/></div>
        <div className='skills-content-f'><h3 className='skills-heading long-text'>JavaScript</h3><SiJavascript className='skills-icons big-icon'/></div>
        <div className='skills-content-f'><h3 className='skills-heading long-text'>Bootstrap</h3><BsFillBootstrapFill className='skills-icons big-icon'/></div>
        <div className='skills-content-f'><h3 className='skills-heading big-text'>JQuery</h3><DiJqueryLogo className='skills-icons'/></div>
        <div className='skills-content-f'><h3 className='skills-heading big-text'>ReactJS</h3><DiReact className='skills-icons'/></div>        
        </div>
        </FadeInLeft>
        </div>
        <div className='backend-container'>
     <FadeInRight>
        <div className="backend-box ">
        <h2 className='tools-heading'>Back-End</h2>
        </div>
        <div className='skills-box-b'>
        <div className='skills-content-b'><h3 className='skills-heading big-text'>NodeJS</h3><FaNode className='skills-icons'/></div>
        <div className='skills-content-b'><h3 className='skills-heading'>Ejs</h3><FaNodeJs className='skills-icons'/></div>
        <div className='skills-content-b'><h3 className='skills-heading'>SQL</h3><AiOutlineConsoleSql className='skills-icons'/></div>
        <div className='skills-content-b'><h3 className='skills-heading big-text'>MongoDB</h3><SiMongodb className='skills-icons'/></div>
        <div className='skills-content-b'><h3 className='skills-heading big-text'>Python</h3><FaPython className='skills-icons'/></div>
     </div>
     </FadeInRight>
     </div>
    
        </div>
    
        </section>
    )
}

export default Skills;