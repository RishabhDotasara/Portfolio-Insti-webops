import React, { useEffect } from "react";

export default function AboutMe() {
  
  return (
    <section class="section about_me" id="about_me">
      <h1 class="heading">About Me</h1>
      <div className="cards">
        <div class="card">
          <div class="title">Projects</div>
          <div class="description">
            <ul class="list">
              <li class="points">- <a href="https://github.com/RishabhDotasara/BlogProject2">CRUD App in Django Python</a></li>
              <li class="points">- <a>NaP</a></li>
              <li class="points">- <a>NaP</a></li>
              <li class="points">- <a>NaP</a></li>

              
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="title">Skills</div>
          <div class="description">
            <ul class="list">
              <li class="points">- HTML,CSS</li>
              <li class="points">- React Js</li>
              <li class="points">- DJANGO PYTHON</li>
              <li class="points">- Express Js</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="title">Experience</div>
          <div class="description">
            <ul class="list">
              <li class="points">- Volunteer in Abhyuday business vertical.</li>
              <li class="points">- NaE</li>
              <li class="points">- NaE</li>
              <li class="points">- NaE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
