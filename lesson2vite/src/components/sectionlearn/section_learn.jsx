import React from "react";
import "./section_learn.css";
const SectionLearn = () => {
  return (
    <section class="learn">
      <div class="learn__text">
        <h2 class="learn__title">What you eill learn</h2>
        <p>
          Up-to-date knowledge from recognized market experts for beginners and
          practitioners
        </p>
        <p>
          On the platform, you can gain knowledge on current topics and
          in-demand skills. All courses are aimed at practice: we monitor the
          relevance of the material and help with employment and internship
        </p>
      </div>
      <div class="learn__counters">
        <div class="learn__counter-item">
          <p class="learn__counter-number">56</p>
        </div>
        <p className="learn__counter-description">Curators</p>
      </div>
      <div class="learn__counters">
        <div class="learn__counter-item">
          <p class="learn__counter-number">108</p>
        </div>
        <p className="learn__counter-description"></p>
      </div>
      <div class="learn__counters">
        <div class="learn__counter-item">
          <p class="learn__counter-number">3723</p>
        </div>
        <p className="learn__counter-description">Graduates</p>
      </div>
    </section>
  );
};

export default SectionLearn;
