import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(import("./Parallax"), {
  ssr: false,
});

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
              <div className="kura_tm_main_title light">
                <span>Skills</span>
                <h3>Programming Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                I am Thanh Nguyen, a software developer with skill about designing, developing, and deploying
applications. Proficient in multiple programming languages, software development methodologies, and
database management systems. Good Problem-solving skills and ability to work effectively in a team-based
environment.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Problem Solving</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Self Taught</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Java &amp; Spring Framework</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">C# &amp; ASP.NET</span>
                    
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="60">
                  <span>
                    <span className="label">HTML &amp; CSS</span>
                    
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="80">
                  <span>
                    <span className="label">SQL &amp; NoSQL</span>
                    
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">ReactJs</span>
                    
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <ParallaxVideo />
              <div
                className="my_image jarallax"
                data-speed="0"
                style={{
                  backgroundImage: "url(/img/hero/1.jpg)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
