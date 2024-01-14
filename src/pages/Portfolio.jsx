import photo1 from '../assets/img/workday.jpg';
import photo2 from '../assets/img/5656.jpg';
import photo3 from '../assets/img/gameGenius.jpg';
import photo4 from '../assets/img/jate.jpg';
import photo5 from '../assets/img/password.jpg';
import photo6 from '../assets/img/baby2.jpg';

export default function Portfolio() {
    return (
    <section id="portfolio" class=" py-5">
    <div>
      <h1 id='titleH1' class="text-center display-4">Portfolio</h1>
      <div class="row">
      <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo2} alt="logo" />
            <div id='containerTextCard' class="card-body">
                <h2 id='titleCard' class="card-title">Weather Dashboard</h2>
                <p id='textCard' class="card-text">The main goal of this project it's build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.</p>
                <div>
                  <a id='linkPortfolio' href="https://garmercy.github.io/Weather-Dashboard/">Deployed application</a>
                </div>
                <div>
                  <a id='linkPortfolio'  href="https://github.com/garmercy/Weather-Dashboard?tab=readme-ov-file">GitHub repository</a>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo3} alt="logo" />
            <div id='containerTextCard' class="card-body">
                <h2 id='titleCard' class="card-title">GameGenius Project1</h2>
                <p id='textCard' class="card-text">GameGenius is a user-friendly platform that provides tailored game recommendations to players. Relish in personalized suggestions, an extensive game library. Unearth exceptional games effortlessly with GameGenius.</p>
                <div>
                  <a id='linkPortfolio' href="https://muhammadkhabbaz.github.io/GameGenius/index.html">Deployed application</a>
                </div>
                <div>
                  <a id='linkPortfolio' href="https://github.com/garmercy/GameGenius?tab=readme-ov-file">GitHub repository</a>
                </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo6} alt="logo" />
            <div id='containerTextCard' class="card-body">
                <h2 id='titleCard' class="card-title">Project 1</h2>
                <p id='textCard' class="card-text">Babysitters Club is a community-driven platform designed to facilitate a trusted and secure environment for parents to exchange babysitting services.</p>
                <div>
                  <a id='linkPortfolio' href="https://babysitters-app-7fe0f50cf2a3.herokuapp.com/">Deployed application</a>
                </div>
                <div>
                  <a id='linkPortfolio' href="https://github.com/honguyen00/babysitters">GitHub repository</a>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo1} alt="logo" />
            <div id='containerTextCard' class="card-body">
                <h2 id='titleCard' class="card-title">Work Day Scheduler</h2>
                <p id='textCard' class="card-text">It's a calendar apllication build that allows an user to save events for each hour of a typical working day (9am–5pm).
               </p>
                <div>
                  <a id='linkPortfolio' href="https://garmercy.github.io/Work-Day-Scheduler/">Deployed application</a>
                </div>
                <div>
                  <a id='linkPortfolio' href="https://github.com/garmercy/Work-Day-Scheduler?tab=readme-ov-file">GitHub repository</a>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo4} alt="logo" />
            <div id='containerTextCard' class="card-body">
                <h2 id='titleCard' class="card-title">JATE (PWA)</h2>
                <p id='textCard' class="card-text">The app it's a text editor that runs in the browser and it's a single-page application that meets the PWA criteria. Additionally, the app will function offline.</p>
                <div>
                  <a id='linkPortfolio' href="https://pwa-text-editor-bhyv.onrender.com/">Deployed application</a>
                </div>
                <div>
                  <a id='linkPortfolio' href="https://github.com/garmercy/-PWA-Text-Editor">GitHub repository</a>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo5} alt="logo" />
            <div id='containerTextCard' class="card-body">
                <h2 id='titleCard' class="card-title">Password Generator</h2>
                <p id='textCard' class="card-text">This project was created with the goal of generate random passwords. </p>
                <p id='textCard'>This app runs in the browser, and the password can include special characters.</p>
                <div>
                  <a id='linkPortfolio' href="https://garmercy.github.io/PasswordGenerator/">Deployed application</a>
                </div>
                <div>
                  <a id='linkPortfolio' href="https://github.com/garmercy/PasswordGenerator">GitHub repository</a>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  );
}
