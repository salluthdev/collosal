import './css/style.css';
import './css/home.css';
import Navbar from './component/Navbar';
import Callout from './component/Callout';
import Footer from './component/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-container">
      <div className="container">
        <Navbar />
        <div className="hero-section">
          <h2>Client-development driven</h2>
          <h1>We Design. We Develop. We Ship. In The Same Day.</h1>
          <p>We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
          <div className="btn-wrapper">
            <Link to="/quote">
              <button>Send Quote</button>
            </Link>
            <Link to="/about">
              <button className="light">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="feature-card">
          <div className="card">
            <img src="img/feature-card-icon-design.svg" />
            <h3>Design</h3>
            <p>The project interface will be designed first, our favorite tool is Figma.</p>
          </div>
          <div className="card">
            <img src="img/feature-card-icon-develop.svg" />
            <h3>Develop</h3>
            <p>Transform design and write business logic here. Choose the technology you want.</p>
          </div>
          <div className="card">
            <img src="img/feature-card-icon-ship.svg" />
            <h3>Ship</h3>
            <p>After the work is complete, we will send the project and all its assets to you.</p>
          </div>
        </div>
        <Callout />
        <Footer />
      </div>
    </div>
  );
}

export default Home;