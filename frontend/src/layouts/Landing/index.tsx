import React, { FC, useEffect } from "react";
import Container from "../../components/Container";
import AdvantageCard from "./AdvantageCard";
import Button from "../../components/Button";
import "./index.scss";
import PlanCard from "./PlanCard";
import { Link } from "react-router-dom";

const mobile = require("../../../assets/mobile.png");
const laptop = require("../../../assets/laptop.png");

interface IProps {
  title: string;
}

const Main: FC<IProps> = ({title}) => {
  useEffect(() => {
    document.title = `${title} | AppCo`;
  });
  return (
    <main>
      <header className="landing-header">
        <Container>
          <div className="landing-header__logo">AppCo</div>
          <section className="first-cta">
          <div className="first-cta__left-part">
            <h1 className="first-cta__title">
              <strong>Brainstorming</strong> for desired perfect Usability
            </h1>
            <p className="first-cta__description">
              Our design projects are fresh and simple and will benefit your business greatly. Learn
              more about our work!
            </p>
            <Button to="/statistics" className="first-cta__button">
              View Stats
            </Button>
          </div>
          <div className="first-cta__right-part">
            <img src={mobile} alt="App mobile view" className="first-cta__right-part--preview" />
          </div>
        </section>
        </Container>
      </header>
      <Container>
        <section className="advantages">
          <h1 className="advantages__title">
            Why <strong>small business owners love</strong> AppCo?
          </h1>
          <p className="advantages__description">
            Our design projects are fresh and simple and will benefit your business greatly. Learn
            more about our work!
          </p>
          <figcaption className="card-container">
            <AdvantageCard
              type={"design"}
              title="Clean Design"
              description="Increase sales by showing true dynamics of your website."
            />
            <AdvantageCard
              type={"security"}
              title="Secure Data"
              description="Build your online store’s trust using Social Proof & Urgency."
            />
            <AdvantageCard
              type={"retina"}
              title="Retina Ready"
              description="Realize importance of social proof in customer’s purchase decision."
            />
          </figcaption>
        </section>
      </Container>
      <section className="second-cta">
        <Container>
          <div className="second-cta__inner">
            <div className="second-cta__left-part">
              <h1 className="second-cta__title">Start Managing your apps business, more faster</h1>
              <p className="second-cta__description">
                Objectively deliver professional value with diverse web-readiness. Collaboratively
                transition wireless customer service without goal-oriented catalysts for change.
                Collaboratively.
              </p>
              <Button to="#" className="second-cta__button">
                Learn more
              </Button>
            </div>
            <div className="second-cta__right-part">
              <img src={laptop} alt="App laptop view" className="second-cta__right-part--preview" />
            </div>
          </div>
        </Container>
      </section>
      <section className="chose-plan">
        <svg
          className="chose-plan__decoration"
          width="513"
          height="908"
          viewBox="0 0 513 908"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.15"
            d="M513 63.6696L513 908C513 908 441.934 908 345.903 871.762C249.873 835.524 185.882 751.687 185.882 665.851L185.882 588.349C185.882 538.867 165.397 490.653 127.358 450.604L68.2993 388.426C-14.8459 300.888 -35.4743 224.006 82.8013 98.8363C201.077 -26.3336 513 2.98339 513 2.98339L513 63.6696Z"
            fill="url(#paint0_linear)"
          />
          <linearGradient
            id="paint0_linear"
            x1="460.144"
            y1="81.846"
            x2="437.542"
            y2="892.337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#255D8B" />
            <stop offset="1" stopColor="#3A80BA" />
          </linearGradient>
        </svg>
        <Container>
          <h1 className="chose-plan__title">
            <strong>Afforadble Pricing and Packages</strong>
            <br />
            choose your best one
          </h1>
          <p className="chose-plan__description">
            Monotonectally grow strategic process improvements vis-a-vis integrated resource
          </p>
          <div className="chose-plan__wrapper">
            <PlanCard type="basic" title="Basic" price={29} />
            <PlanCard type="standard" title="Standard" price={149} />
            <PlanCard type="unlimited" title="Unlimited" price={39} />
          </div>
          <div className="chose-plan__contact">
            If you need custom services or Need more?{" "}
            <Link to="#" className="chose-plan__contact--link">
              Contact us
            </Link>
          </div>
        </Container>
      </section>
      <footer className="footer">
        <Container>
          <form className="footer__subscribe">
            <label className="footer__subscribe--wrapper">
              <input
                className="footer__subscribe--input"
                type="email"
                placeholder="Enter your email"
                pattern="/[a-z0-9\-\.\_]*\@[a-z0-9\_\.\-]*\.[a-z\_\.\-]*/gi"
              />
              <Button className="footer__subscribe--button">Subscribe</Button>
            </label>
          </form>
          <div className="footer__info">
            <div className="footer__info--logo">AppCo</div>
            <div className="footer__info--terms">All rights reserved by ThemeTags</div>
            <div className="footer__info--copyright">Copyrights © 2019. </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
export default Main;
