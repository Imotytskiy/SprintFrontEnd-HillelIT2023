
import Navbar from '../navbar/navbar';
import SectionLearn from '../sectionlearn/section_learn';
import Footer from '../footer/footer';
import men from './img/men.png'
import rectangle from './img/rectangle.svg'
import "./body.css";

const Body = () => {
  return (
    <main className="body">
      <Navbar />
      <section>
        <img src="" alt="" />
        <h1>Explore thousands of hands on creative classes.</h1>
        <p className="offer ">
          Start learning <a href="">free</a>
        </p>
        <button className="">Chooose a course</button>
        <p>50%</p>
        <p className="offer__time">
          <time>24 days 17:44:16</time>
        </p>
        <ul>
          <li>Marketer</li>
          <li>Illustrator</li>
          <li>Programmer</li>
          <li>Designer</li>
          <li>Photographer</li>
          <li>Marketer</li>
        </ul>
        <img className='offer__men' src={men} alt="men" />
        <img className='offe__rectangle' src={rectangle} alt="rectangle" />
      </section>
      <SectionLearn />
      <Footer />
    </main>
  );
};

export default Body;
