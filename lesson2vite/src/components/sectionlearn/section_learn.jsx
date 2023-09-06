
import "./section_learn.css";
const SectionLearn = () => {
  return (
    <section className="learn">
      <div className="learn__text">
        <h2 className="learn__title">What you eill learn</h2>
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
      <div className="learn__counters">
        <div className="learn__counter-item">
          <p className="learn__counter-number">56</p>
        </div>
        <p className="learn__counter-description">Curators</p>
      </div>
      <div className="learn__counters">
        <div className="learn__counter-item">
          <p className="learn__counter-number">108</p>
        </div>
        <p className="learn__counter-description"></p>
      </div>
      <div className="learn__counters">
        <div className="learn__counter-item">
          <p className="learn__counter-number">3723</p>
        </div>
        <p className="learn__counter-description">Graduates</p>
      </div>
    </section>
  );
};

export default SectionLearn;
