import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="frame9" data-scroll-to="frame">
      <section className="container8" id="footer">
        <div className="contactcontent">
          <div className="heading2">
            <h2 className="h26">Get in touch</h2>
            <div className="p-large">
              <span className="contact-with-our">Contact with our team</span>
              <span className="to-talk-about">{`  to talk about how we can help your business process at scale, or sign up for more info `}</span>
            </div>
          </div>
          <div className="contentwrapper3">
            <div className="address">
              <img
                className="mdiaddress-marker-icon"
                alt=""
                src="/mdiaddressmarker.svg"
              />
              <div className="p-large1">
                1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032
              </div>
            </div>
            <div className="phone">
              <img
                className="icbaseline-phone-icon"
                alt=""
                src="/icbaselinephone.svg"
              />
              <div className="p-large2">+91-8888888888</div>
            </div>
            <div className="phone">
              <img
                className="mdiaddress-marker-icon"
                alt=""
                src="/icsharpemail.svg"
              />
              <div className="p-large2">info@unyn.com</div>
            </div>
          </div>
        </div>
        <form className="contactform" id="footer-form">
          <h2 className="h27">Say something</h2>
          <div className="form">
            <input
              className="input1"
              name="name"
              id="name"
              placeholder="Your Name..."
              type="text"
            />
            <input
              className="input1"
              name="email"
              id="email"
              placeholder="Your Mail..."
              type="email"
            />
            <input
              className="input3"
              name="message"
              id="message"
              placeholder="Message..."
              type="text"
            />
            <button className="contactformbutton">
              <div className="send">Send</div>
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
