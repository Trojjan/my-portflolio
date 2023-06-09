import Typewriter from 'typewriter-effect';
import animationData from './media/codingAnimation.json';
import Lottie from 'react-lottie';
import { defaultOptions } from './defaultOptions';
import Skills from './Skills';
import Projects from './Projects'
import FadeInLeft from './FadeInLeft';
import FadeInRight from './FadeInRight';
import FlipIn from './FlipIn';
import Contact from './Contact';


  const options = {...defaultOptions,animationData: animationData};


  function App() {
      
    
  return (
  <div>
   <section id='Home'>
        <div className='container-left-top'>
        <FadeInLeft>
      <div className='wave-div'>
        <span className="wave">👋</span>
      </div>
       <div className='animated-text '>
      <h2>
        <Typewriter
        options={{
          autoStart : true,
          loop : true,
          delay : 50,
          strings : ["Hi There! I'm Ammar"]
        }}
        />
      </h2>
      </div>
      </FadeInLeft>
      </div>
      <div className='container-left'>
      <FadeInLeft>
      <div className='my-info-container'>
        <h1 className='my-info'><span className="highlighted-heading">a Full-Stack Developer</span><br/>Passionate and skilled<br/> in creating robust applications.</h1>
      </div>
      <div className='my-info-paragraph '>
        <p>I'm a full-stack web developer with one year of experience<br/> creating efficient and user-friendly web applications.<br/> My passion for web development drives me to constantly learn and adapt to new technologies.<br/> I'm committed to delivering high-quality work that exceeds expectations.</p>
      </div>
      </FadeInLeft>
      </div>
      <div className='illustration-container'>
      <FadeInRight>
      <div className='coding-gif'>
      <Lottie options={options} />
      </div>
      </FadeInRight>
      </div>
        </section>
        <Skills/>
        <Projects/>
        <section id='quote'>
          <div className='quote-container'>
          <FlipIn>
          <div className='quote-box'>
            <h1 className='quote-heading'>" Believe You Can And<br/>You're Halfway There. "</h1>
          </div>
          </FlipIn>
          </div>
        </section>
        <Contact/>
        <footer>
          <p>© Copyright 2023 Ammar.Dev All Rights Reserved.</p>
        </footer>
  </div>
  
    )
  }

  export default App;