import logo from '../images/logo.svg'
import {Pagelinks} from '../data'
import {SocialLinks} from '../data'

const Navbar = () =>{
  return <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
         { Pagelinks.map((link) =>{
            return (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>

            )
          })}
        </ul>

        <ul className="nav-icons">
            
            {SocialLinks.map((link)=>{
            return (
                <li key={link.id}>
                  <a href={link.href} target="_blank" className="nav-icon">
                    <i className={link.icon} ></i>
                  </a>
                  </li>
            )
            })}
            
          
            
        </ul>
      </div>
    </nav>
  
  
  </>
}

export default Navbar