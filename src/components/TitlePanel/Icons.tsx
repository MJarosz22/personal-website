import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icons() {
    return (
        <div className='Icons flex flex-row gap-5 mb-5 justify-center'>
                     <button className='btn btn-square btn-ghost' onClick={() => window.location.replace('https://linkedin.com/in/marcinjarosz22')}>  <FontAwesomeIcon icon={faLinkedin} className=" text-3xl"/> </button> 
                     <button className='btn btn-square btn-ghost' onClick={() => window.location.replace('https://github.com/mjarosz22')}>  <FontAwesomeIcon icon={faGithub} className=" text-3xl"/> </button> 
                     <button className='btn btn-square btn-ghost' onClick={() => window.location.replace('https://twitter.com/jarrosh')}>  <FontAwesomeIcon icon={faTwitter} className=" text-3xl"/> </button> 
        </div>
    )
}