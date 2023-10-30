import "../styles/Newsletter.css";

const Newsletter = () => {
  return (
    <section className="frame8">
      <section className="container7">
        <div className="contentwrapper2">
          <div className="heading1">
            <h2 className="h25">Stay Updated with UNYN Newsletter</h2>
            <div className="p7">{`Gets the latest updates, news and exciting opportunities for UNYN. `}</div>
          </div>
          <div className="newsletterform-parent">
            <div className="newsletterform">
              <button className="button5">
                <div className="sign-up">Sign up</div>
              </button>
              <input
                className="input"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="p-small">
              By signing up, you agree to our Term and Conditions.
            </div>
          </div>
        </div>
        <img className="container-child" alt="" src="/rectangle-8@2x.png" />
      </section>
    </section>
  );
};

export default Newsletter;
