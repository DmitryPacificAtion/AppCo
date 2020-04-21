import React from "react";
import Container from "../../components/Container";
import AdvantageCard from "./AdvantageCard";
import Button from "../../components/Button";
import "./styles.scss";
import PlanCard from "./PlanCard";

const mobile = require("../../../assets/mobile.png");
const laptop = require("../../../assets/laptop.png");

const Main = () => (
  <main>
    <svg
      className="header-waves"
      width="1440"
      height="655"
      viewBox="0 0 1440 655"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H1440V104.272L1378.2 217.493C1308.11 345.888 1173.41 425.778 1027.02 425.778H894.837C810.446 425.778 728.218 452.441 659.915 501.953L553.869 578.824C404.575 687.046 200.558 679.249 59.9767 559.948L0 509.05V0Z"
        fill="url(#paint0_linear)"
      />
      <linearGradient
        id="paint0_linear"
        x1="31"
        y1="68.7909"
        x2="1412.52"
        y2="119.271"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#255D8B" />
        <stop offset="1" stopColor="#3A80BA" />
      </linearGradient>
    </svg>
    <Container>
      <header className="header">
        <div className="header__logo">AppCo</div>
      </header>
      <section className="first-cta">
        <div className="first-cta__left-part">
          <h1 className="first-cta__title">
            <strong>Brainstorming</strong> for desired perfect Usability
          </h1>
          <p className="first-cta__description">
            Our design projects are fresh and simple and will benefit your business greatly. Learn
            more about our work!
          </p>
          <Button to="#">View Stats</Button>
        </div>
        <div className="first-cta__right-part">
          <img src={mobile} alt="App mobile view" />
        </div>
      </section>
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
            title="Clean Design"
            description="Increase sales by showing true dynamics of your website."
          />
          <AdvantageCard
            type={"retina"}
            title="Clean Design"
            description="Increase sales by showing true dynamics of your website."
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
            <Button to="#">Learn more</Button>
          </div>
          <div className="second-cta__right-part">
            <img src={laptop} alt="App laptop view" />
          </div>
        </div>
      </Container>
    </section>
    <section className="chose-plan">
    <svg className="chose-plan__decoration" width="513" height="908" viewBox="0 0 513 908" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.15" d="M513 63.6696L513 908C513 908 441.934 908 345.903 871.762C249.873 835.524 185.882 751.687 185.882 665.851L185.882 588.349C185.882 538.867 165.397 490.653 127.358 450.604L68.2993 388.426C-14.8459 300.888 -35.4743 224.006 82.8013 98.8363C201.077 -26.3336 513 2.98339 513 2.98339L513 63.6696Z" fill="url(#paint0_linear)"/>
      <linearGradient id="paint0_linear" x1="460.144" y1="81.846" x2="437.542" y2="892.337" gradientUnits="userSpaceOnUse">
      <stop stopColor="#255D8B"/>
      <stop offset="1" stopColor="#3A80BA"/>
      </linearGradient>
    </svg>
    <Container>
      <h1 className="chose-plan__title"><strong>Afforadble Pricing and Packages</strong><br/>choose your best one</h1>
      <p className="chose-plan__description">Monotonectally grow strategic process improvements vis-a-vis integrated resource</p>
      <PlanCard
        type="basic"
        title="Basic"
        price={29}
      />
      <PlanCard
        type="standard"
        title="Standard"
        price={149}
      />
      <PlanCard
        type="unlimited"
        title="Unlimited"
        price={39}
      />
    </Container>
    </section>
  </main>
);
export default Main;
