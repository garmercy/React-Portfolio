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
      <h1>About me</h1>
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >About me</h2> 
      </div>
      <div >
        <p id="aboutText">
        I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. 
        I take into consideration the user experience while writing reusable and efficient code. 
        I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.
        Currently, I'm focused on the backend development.
        </p>
      </div>
      <div class="col-lg-12">
        <h2 id="h1AboutMe">Technologies and Tools</h2> 
      </div>
      <div >
        <p id="aboutText">
        Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </p>
      </div>
    </div>
    
  );
}
