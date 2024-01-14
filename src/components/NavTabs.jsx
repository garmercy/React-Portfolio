import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/Cristina.png';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    
    <nav class="navbar navbar-default" role="navigation" id='containerHeader'>
          
      <ul className="nav nav-tabs" id='logoContainer'>
        <li className="nav-item">
          <Link
            to="/About"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'} id='link1'
          ><img src={logo} alt="logo" class='logo' />
          </Link>
        </li>
      </ul>
      <ul className="nav nav-tabs" id='links'>
        <li className="nav-item">
          <Link
            to="/About"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'} id='link2'
          >
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'} id='link2'
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} id='link2'
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'} id='link2'
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
