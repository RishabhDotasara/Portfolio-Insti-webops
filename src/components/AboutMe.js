import React from "react";

export default function AboutMe() {
  return (
    <section class="section about_me" id="about_me">
      <h1 class="heading">About Me</h1>
      <div className="cards">
        <div class="card">
          <div class="title">Education</div>
          <div class="description">
            <ul class="list">
              <li class="points">- Passed 10th standard with 98%</li>
              <li class="points">- Passed 12th standara with 93.4%</li>
              <li class="points">
                - Cleared Jee Advance with <br />
                AIR 5719
              </li>
              <li class="points">- Pursuing B.Tech at IIT Madras</li>
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
