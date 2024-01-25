import React from "react";

const Timeline = () => {
  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Working Period</h3>
          </div>
          <div className="timeline_list">
            <ul>
              <li className="wow fadeInUp" data-wow-duration=".7s">
                <div className="list_inner">
                  <span>September, 2023 - Today</span>
                </div>
                <div className="list_inner">
                  <span>Software Developer</span>
                </div>
                <div className="list_inner">
                  <span>FPT Software</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>September, 2021 - October, 2023</span>
                </div>
                <div className="list_inner">
                  <span>Student</span>
                </div>
                <div className="list_inner">
                  <span>FPT University</span>
                </div>
              </li>
              
        
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
