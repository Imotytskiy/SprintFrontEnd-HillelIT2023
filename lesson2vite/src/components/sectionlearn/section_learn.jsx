import "./section_learn.css";
import arrow from "./img/see_arrow.svg";
import analitics from "./img/analitics.jpg";
import animation from "./img/animation.jpg";
import art from "./img/art.jpg";
import marketing from "./img/marketing.jpg";
const SectionLearn = () => {
  return (
    <>
      <section className="learn container">
        <div className="learn__text">
          <h2 className="learn__title">What you will learn</h2>
          <p>
            Up-to-date knowledge from recognized market experts for beginners
            and practitioners
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
          <p className="learn__counter-descript">Courses</p>
          <hr className="horizontal-line"></hr>
        </div>

        <div className="learn__counters">
          <div className="learn__counter-item">
            <p className="learn__counter-number">108</p>
          </div>
          <p className="learn__counter-descript">Curators</p>
          <hr className="horizontal-line"></hr>
        </div>
        <div className="learn__counters">
          <div className="learn__counter-item">
            <p className="learn__counter-number">3723</p>
          </div>
          <p className="learn__counter-descript">Graduates</p>
          <hr className="horizontal-line"></hr>
        </div>
      </section>
      <section className="discover">
        <h2 className="discover__title">Discover Lifelong Learning</h2>
        <div className="discover__block">
          <ul className="discover__list">
            <li>
              <button className="discover__button">Popular</button>
            </li>
            <li>
              <button className="discover__button">Animation</button>
            </li>
            <li>
              <button className="discover__button">Design</button>
            </li>
            <li>
              <button className="discover__button">Illustration</button>
            </li>
            <li>
              <button className="discover__button">Programming</button>
            </li>
            <li>
              <button className="discover__button">Photo & Film</button>
            </li>

            <li>
              <button className="discover__button">Marketing</button>
            </li>
          </ul>
          <div>
            <a className="discover__button-see" href="#">
              <span>See more</span> <img src={arrow} alt="see arrow" />
            </a>
          </div>
        </div>
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
      </section>
      <section className="find-program">
        <div className="find-program__text">
          <h2 className="find-program__title">
            Can&apos;t find a suitable program?
          </h2>
          <p className="find-program__descript">
            We will help you with the choice!
          </p>
        </div>
        <form action="https://fom.in.ua/echo" className="find-program__form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <button className="find-program__button">Help me</button>
        </form>
      </section>
    </>
  );
};

export default SectionLearn;
