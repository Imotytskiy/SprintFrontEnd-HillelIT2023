
import Navbar from '../navbar/navbar';
import "./body.css";

const Body = () => {
  return (
    <main className="body">
      <Navbar />
      <section>
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
      </section>
    </main>
  );
};

export default Body;
