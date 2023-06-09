import './css-files/contact.css';
import {FaFacebookF ,FaTwitter,FaRedditAlien}from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {SlSocialLinkedin} from 'react-icons/sl'
import {MdEmail} from 'react-icons/md'

function Contact() {
    return (
        <section id='contact'>
            <div className='contact-heading-div'>
            <h1 className='contact-heading'>CONNECT WITH ME</h1>
            </div>
            <div className='contact-container'>
            <a href="https://www.facebook.com/Omar.Gamal.Azizi" target="_blank" rel="noopener noreferrer">
            <div className='contact-links' style={{backgroundColor:'#3b5998'}}>
                <span className='links-icon'><FaFacebookF style={{color:'#C1C3D0'}}/></span>
            </div>
            </a>
            <a href="https://twitter.com/akai1996" target="_blank" rel="noopener noreferrer">
            <div className='contact-links' style={{backgroundColor:'#00acee'}}>
                <span className='links-icon'><FaTwitter style={{color:'#BCD0CD'}}/></span>
            </div>
            </a>
            <a href="https://github.com/Trojjan" target="_blank" rel="noopener noreferrer">
            <div className='contact-links' style={{backgroundColor:'#171515'}}>
                <span className='links-icon'><FiGithub style={{color:'#BCD0CD'}}/></span>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/amar-azizi-7272691a4/" target="_blank" rel="noopener noreferrer">
            <div className='contact-links' style={{backgroundColor:'#0072b1'}}>
                <span className='links-icon'><SlSocialLinkedin style={{color:'#BCD0CD'}}/></span>
            </div>
            </a>
            <a href="https://www.reddit.com/user/OmarGamal96" target="_blank" rel="noopener noreferrer">
            <div className='contact-links' style={{backgroundColor:'#ff4500'}}>
                <span className='links-icon'><FaRedditAlien style={{color:'#BCD0CD'}}/></span>
            </div>
            </a>
            </div>
            <a href="mailto:ytamar568@gmail.com">
            <div className='contact-me'>
                <h1 className='email-heading'>Send Me An Email</h1>
                <MdEmail className='email-icon'/>
            </div>
            </a>
        </section>
    )
}


export default Contact;