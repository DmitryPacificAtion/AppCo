import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/Container'
import Card from '../components/Card'
import './Main.scss';

const image = require('../../assets/mobile.png');

const Main = () => (
  <main>
    <svg className="header-waves" width="1440" height="655" viewBox="0 0 1440 655" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1440V104.272L1378.2 217.493C1308.11 345.888 1173.41 425.778 1027.02 425.778H894.837C810.446 425.778 728.218 452.441 659.915 501.953L553.869 578.824C404.575 687.046 200.558 679.249 59.9767 559.948L0 509.05V0Z" fill="url(#paint0_linear)"/>
      <linearGradient id="paint0_linear" x1="31" y1="68.7909" x2="1412.52" y2="119.271" gradientUnits="userSpaceOnUse">
      <stop stopColor="#255D8B"/>
      <stop offset="1" stopColor="#3A80BA"/>
      </linearGradient>
    </svg>
    <Container>
      <header className="header">
        <div className="header__logo">AppCo</div>
      </header>
      <section className="first-cta">
        <div className="first-cta__left-part">
          <h1 className="first-cta__title"><strong>Brainstorming</strong> for desired perfect Usability</h1>
          <p className="first-cta__description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <Link to="#" className="button button--light">View Stats</Link>
        </div>
        <div className="first-cta__right-part"><img src={image} alt="App view"/></div>
      </section>
      <section className="advantages">
          <h1 className="advantages__title">Why <strong>small business owners love</strong> AppCo?</h1>
          <p className="advantages__description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <figcaption className="card-container">
            <Card type={'design'} title="Clean Design" description="Increase sales by showing true dynamics of your website." />
            <Card type={'security'} title="Clean Design" description="Increase sales by showing true dynamics of your website." />
            <Card type={'retina'} title="Clean Design" description="Increase sales by showing true dynamics of your website." />
          </figcaption>
      </section>
    </Container>
  </main>
)
export default Main;
