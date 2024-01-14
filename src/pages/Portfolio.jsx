import photo1 from '../assets/img/workday.jpg';
import photo2 from '../assets/img/5656.jpg';
import photo3 from '../assets/img/gameGenius.jpg';
import photo4 from '../assets/img/jate.jpg';
import photo5 from '../assets/img/password.jpg';
import photo6 from '../assets/img/baby.jpg';

export default function Portfolio() {
    return (
    <section id="portfolio" class=" py-5">
    <div>
      <h1 id='h1Portfolio' class="text-center display-4">Portfolio</h1>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-3">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo1} alt="logo" />
            <div id='containerTextCard' class="card-body">
              <a href="">
                <h2 id='titleCard' class="card-title">Work Day Scheduler</h2>
                <p id='textCard' class="card-text">I created a calendar application by modifying starter code.</p>
                <p id='textCard'>The goals of this project are:</p>
                <p id='textCard'>Allows an user to save events for each hour of a typical working day (9am–5pm).</p>
                <p id='textCard'>Feature dynamically updated HTML and CSS powered by jQuery and run in the browser.</p>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo2} alt="logo" />
            <div id='containerTextCard' class="card-body">
              <a href="">
                <h2 id='titleCard' class="card-title">Weather Dashboard</h2>
                <p id='textCard' class="card-text">The main goal of this project it's build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
The weather dashboard will contain all the cities weather information and will be used APIs in this project to get the weather information.</p>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo3} alt="logo" />
            <div id='containerTextCard' class="card-body">
              <a href="">
                <h2 id='titleCard' class="card-title">GameGenius Project1</h2>
                <p id='textCard' class="card-text">GameGenius is a user-friendly platform that provides tailored game recommendations to players. Relish in personalized suggestions, an extensive game library. Unearth exceptional games effortlessly with GameGenius.</p>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo4} alt="logo" />
            <div id='containerTextCard' class="card-body">
              <a href="">
                <h2 id='titleCard' class="card-title">JATE (PWA)</h2>
                <p id='textCard' class="card-text">My task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria and it will feature a number of data persistence techniques. Additionally, the app will function offline.</p>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo5} alt="logo" />
            <div id='containerTextCard' class="card-body">
              <a href="">
                <h2 id='titleCard' class="card-title">Password Generator</h2>
                <p id='textCard' class="card-text">This project was created with the goal of generate random passwords. </p>
                <p id='textCard'>The main requirements are:</p>
                <p id='textCard'>Generate a strong password that provides greater security.</p>
                <p id='textCard'>Run in the browser, and the password can include special characters.</p>
                
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div id='containerCardPortfolio' class="card h-100">
          <img src={photo6} alt="logo" />
            <div id='containerTextCard' class="card-body">
              <a href="">
                <h2 id='titleCard' class="card-title">Project 1</h2>
                <p id='textCard' class="card-text">Babysitters Club is a community-driven platform designed to facilitate a trusted and secure environment for parents to exchange babysitting services.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
