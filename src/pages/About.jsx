import photo from '../assets/img/vineta.png';
import icon from '../assets/img/github.png';
export default function About() {
  return (
    <div class="container" >
      <div class="row" id='containerFrontAbout'>
        <div class="col-lg-6" id='containerHomeText'>
          <h1 id='titleH1' class="display-4">Welcome to my portfolio </h1>
          <h2 id="typed-text" class="display-4">I'm garmercy</h2>
          <h1 id='titleH1' >Full Stack Developer, Front End Developer, Mobile Developer</h1>
          <a id='linkNdec' href="https://github.com/garmercy"><h2 id='githubIcon'>Check my work
            <img src={icon} alt="logo" id='icon'/></h2>
          </a>
        </div>
        <div class="col-lg-6" id='containerHomeImg'>
          <img src={photo} alt="logo" id='photo'/>
        </div>
      </div>
      <h1 id='titleH1' >About me</h1>
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
      <div id="appsContainer" class="row">
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css" id="appIcon"/>

            <p class="card-text">CSS</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="css" id="appIcon"/>
            <p class="card-text">Express</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="css" id="appIcon"/>
            <p class="card-text">Node</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" alt="css" id="appIcon"/>
            <p class="card-text">React</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="css" id="appIcon"/>
            <p class="card-text">HTML</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="css" id="appIcon"/>
            <p class="card-text">Bootstrap</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="css" id="appIcon"/>
            <p class="card-text">JavaScript</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="css" id="appIcon"/>
            <p class="card-text">Git</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" alt="css" id="appIcon"/>
            <p class="card-text">MySQL.</p>
          </div>
        </div>
        <div id="containeMiniApp" class="col-sm-2 mb-3">
          <div class="card-body">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt="css" id="appIcon"/>
            <p class="card-text">MongoDb</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
