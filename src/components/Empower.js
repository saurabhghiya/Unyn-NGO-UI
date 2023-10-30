import ProgramsCard from "./ProgramsCard";
import "../styles/Empower.css";

const Empower = () => {
  return (
    <section className="frame5">
      <section className="container3">
        <div className="content1">
          <div className="empower">Empower</div>
          <h2 className="h22">Unlock Your Potential with UNYN</h2>
          <div className="p4">
            At UNYN, we offer a range of impactful programs and events designed
            to empower young individuals. From mentorship programs to networking
            events and international collaborations, we provide the resources
            and support needed to help you thrive.
          </div>
        </div>
        <div className="container4">
          <div className="cardscontainer">
            <ProgramsCard
              cardIcon="/counseling-1@2x.png"
              cardTitle="Mentorship Programs"
              cardText="Connect with experienced mentors who will guide you towards success."
            />
            <ProgramsCard
              cardIcon="/counseling-11@2x.png"
              cardTitle="Networking Events"
              cardText="Expand your network and forge valuable connections with like- minded individual."
            />
            <ProgramsCard
              cardIcon="/counseling-12@2x.png"
              cardTitle="International Collaborations"
              cardText="Gain global exposure and collaborate with students from different ocuntries."
            />
          </div>
          <div className="joinwrapper1">
            <button className="button2" autoFocus={true} id="btn">
              <div className="join1">Join</div>
            </button>
            <div className="learnmore1">
              <div className="learn-more1">Learn More</div>
              <img className="line-icon2" alt="" src="/line1.svg" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Empower;
