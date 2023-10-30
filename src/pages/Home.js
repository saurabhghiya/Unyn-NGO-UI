import Header from "../components/Header";
import Hero from "../components/Hero";
import Empower from "../components/Empower";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="frame">
        <Header />
        <Hero />
        <section className="frame1">
          <section className="container">
            <div className="content">
              <h2 className="h2">
                <span>{`Empowering Youth for a Brighter Future: `}</span>
                <span className="unyns-impact-on">
                  UNYN’s Impact on Youth Individuals
                </span>
              </h2>
              <div className="p">
                United Youth Network (UNYN) is dedicated to empowering young
                individuals by providing them with opportunities for growth and
                development. Through our international student society, we aim
                to nurture their talents and unlock their full potential. By
                investing in the youth today, we believe that we can create a
                brighter and more promising future for tomorrow.
              </div>
            </div>
            <img className="image-icon" alt="" src="/rectangle-5@2x.png" />
          </section>
        </section>
        <Empower />
        <section className="frame2">
          <section className="container1">
            <div className="contentwrapper">
              <b className="h21">
                Unlock Your Potential and Make a Lasting Impact with UNYN
              </b>
              <div className="p1">
                Joining UNYN offers a unique opportunity for personal growth,
                professional development, and making a positive difference in
                the world. Our dynamic and impactful international student
                society is dedicated to nurturing the talents and potential of
                young individuals across colleges and universities worldwide.
                Through our diverse range of programs, events, and initiatives,
                we empower the youth today to create a brighter and more
                promising future for tomorrow.
              </div>
            </div>
            <img className="image-icon1" alt="" src="/rectangle-6@2x.png" />
          </section>
        </section>
        <Testimonials />
        <CTA />
        <Newsletter />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
