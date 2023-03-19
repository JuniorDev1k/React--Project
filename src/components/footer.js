import { Pagelinks , SocialLinks } from "../data"
const Footer = () =>{
    return <>
        <footer className="section footer">
      <ul className="footer-links">
        {
          Pagelinks.map((link)=>{
              const {id, href, text } = link
            return (
              <li>
              <a href={href} className="footer-link">{text}</a>
            </li>
              )
          })
        }
      </ul>
      
      <ul className="footer-icons">
        {
          SocialLinks.map((link)=>{
              const {id, icon, href} = link
              return (
                <li key={id}>
                 <a href={href} target="_blank" className="footer-icon"
                  ><i className={icon}></i></a>
              </li>
              )
          })
        }
        
         
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
}

  export default Footer