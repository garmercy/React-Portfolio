import photo from '../assets/img/vineta.png';
import icon from '../assets/img/github.png';
export default function About() {
  return (
    <div class="container" >
      <div class="row" id='containerFrontAbout'>
        <div class="col-lg-6" id='containerHomeText'>
          <h1 class="display-4">Welcome to my portfolio </h1>
          <h2 id="typed-text" class="display-4">I'm garmercy</h2>
          <h1>Full Stack Developer, Front End Developer, Mobile Developer</h1>
          <a href="https://github.com/garmercy"><h2 id='githubIcon'>Check my work
            <img src={icon} alt="logo" id='icon'/></h2>
          </a>
        </div>
        <div class="col-lg-6" id='containerHomeImg'>
          <img src={photo} alt="logo" id='photo'/>
        </div>
      </div>
    </div>
  );
}
