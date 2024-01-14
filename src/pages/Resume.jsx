import MyPDF from '../assets/img/resume.jpg';     
export default function Resume() {
  return (
    <div id="containerFrontAbout">
      <h1>Resume</h1>
      <a id='resumeLink' href={MyPDF} download="Resume.jpg">Click to download my resume.</a>   
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >Objective:</h2> 
      </div>
      <div >
        <p id="aboutText">
        Experienced Full Stack Developer with a strong background in both front-end and back-end technologies. Proven ability to design, develop, and deploy robust web applications. Seeking a challenging role to contribute technical skills and innovative problem-solving abilities.
        </p>
      </div>
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >Technical Skills:</h2> 
      </div>
      <div >
        <p id="aboutText">
          <h4>Front-End:</h4>
          <p>HTML5, CSS3, JavaScript, React.js, Vue.js, Responsive Web Design</p>

          <h4>Back-End:</h4>
          <p>Node.js, Express.js, Python, Django, RESTful API Development</p>

          <h4>Database:</h4>
          <p>MongoDB, MySQL, PostgreSQL, Database Design and Optimization</p>

          <h4>Tools:</h4>
          <p>Git, GitHub, Bitbucket, Webpack, Babel, Docker</p>

          <h4>Other Skills:</h4>
          <p>Agile/Scrum methodology, Test-Driven Development (TDD), Continuous Integration/Continuous Deployment (CI/CD)</p>
        </p>
      </div>
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >Education:</h2> 
      </div>
      <div >
        <p id="aboutText">
        Bachelor of Science in Computer Science | University Name, City, State | [Month Year] - [Month Year]
        </p>
      </div>
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >Certifications:</h2> 
      </div>
      <div >
        <p id="aboutText">
        Full Stack Web Developer Certification
        <p>(Any other relevant certifications)</p>
        </p>
      </div>
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >Projects:</h2> 
      </div>
      <div >
        <p id="aboutText">
          <h4>Project 1: E-commerce Website</h4>
          <p>Developed a fully functional e-commerce website with user authentication, product catalog, and payment gateway integration.</p>
          <p>Technologies: React.js, Node.js, MongoDB, Stripe API</p>
          <h4>Project 2: Task Management App</h4>
          <p>Created a task management application with features such as task creation, assignment, and completion tracking.</p>
          <p>Technologies: Vue.js, Express.js, PostgreSQL.</p>
          </p>
      </div>
      <div class="col-lg-12">
        <h2 id="h1AboutMe" >Achievements:</h2> 
      </div>
      <div >
        <p id="aboutText">
        Recognized for outstanding contributions to the development of a critical module, resulting in a 20% improvement in application performance.
        <p>Received "Employee of the Month" award for successfully delivering a complex project ahead of schedule.</p>
        </p>
      </div>
    </div>
  );
}
