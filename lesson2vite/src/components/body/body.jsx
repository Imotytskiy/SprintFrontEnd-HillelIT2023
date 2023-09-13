import Navbar from "../navbar/navbar";
import SectionLearn from "../sectionlearn/section_learn";
import Footer from "../footer/footer";
import men from "./img/men.png";
import rectangle from "./img/rectangle.svg";
import "./body.css";

const Body = () => {
  return (
    <main className="body container">
      <Navbar />
      <section className="offer container">
        <div className="offer__holder">
          <img src="" alt="" />
          <h1 className="offer__title">
            Explore thousands of hands on creative classes.
          </h1>
          <p className="offer__description">
            Start learning <a href="">free</a>
          </p>
          <button className="offer__button">Chooose a course</button>
          <p className="offer__sale">50%</p>
          <p className="offer__time">
            <time>24 days 17:44:16</time>
          </p>
        </div>

        <ul className="off  er__list">
          <li className="offer_marketer offer__item">Marketer</li>
          <li className="offer_animator offer__item">Animator</li>
          <li className="offer_illustrator offer__item">Illustrator</li>
          <li className="offer_programmer offer__item">Programmer</li>
          <li className="offer_designer offer__item">Designer</li>
          <li className="offer_photographer offer__item">Photographer</li>
        </ul>
      </section>
      <SectionLearn />
      <Footer />
    </main>
  );
};

export default Body;
