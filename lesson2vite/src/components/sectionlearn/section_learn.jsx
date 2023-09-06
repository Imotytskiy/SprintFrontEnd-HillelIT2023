
import "./section_learn.css";
import arrow from '../../assets/see_arrow.svg';
import analitics from '../../assets/analitics.jpg';
import animation from '../../assets/animation.jpg';
import art from '../../assets/art.jpg';
import marketing from '../../assets/marketing.jpg';
const SectionLearn = () => {
  return (
    <>
    <section className="learn">
      <div className="learn__text">
        <h2 className="learn__title">What you will learn</h2>
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
        <p className="learn__counter-descript">Curators</p>
      </div>
      <div className="learn__counters">
        <div className="learn__counter-item">
          <p className="learn__counter-number">108</p>
        </div>
        <p className="learn__counter-descript"></p>
      </div>
      <div className="learn__counters">
        <div className="learn__counter-item">
          <p className="learn__counter-number">3723</p>
        </div>
        <p className="learn__counter-description">Graduates</p>
      </div>
    </section>
    <section className="discover">
      <h2 className="discover__title">Discover Lifelong Learning</h2>
      <ul className="discover__list">
        <li>
          <button className="discover__button">
          Popular 

          </button>
        </li>
        <li>
          <button className="discover__button">
          Animation

          </button>
        </li>
        <li>
          <button className="discover__button">
          Design 

          </button>
        </li><li>
          <button className="discover__button">
          Illustration 

          </button>
        </li>
        <li>
          <button className="discover__button">
          Programming

          </button>
        </li>
        <li>
          <button className="discover__button">
          Photo & Film 

          </button>
        </li>
        
        <li>
          <button className="discover__button">
          Marketing
          </button>
        </li>

      </ul>
      <a href="#">See more <img src={arrow} alt="see arrow" /></a>
      
    </section>
    <div className="discover__cards">
      <article>
        <img src={marketing} alt="marketing card" />
        <h3 className="discover__card-item">Sales Marketing</h3>
        <p className="discover__card-length">6 months</p>
      </article>
      <article>
        <img src={analitics} alt="analitics card" />
        <h3 className="discover__card-item">Data analytics</h3>
        <p className="discover__card-length">9 months</p>
      </article>
      <article>
        <img src={art} alt="art card" />
        <h3 className="discover__card-item">Design art</h3>
        <p className="discover__card-length">4 months</p>
      </article>
      <article>
        <img src={animation} alt="animation card" />
        <h3 className="discover__card-item">Sales Marketing</h3>
        <p className="discover__card-length">8 months</p>
      </article>
      </div>
    </>
  );
};

export default SectionLearn;
