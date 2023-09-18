import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
      Fitness for <span>her</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
          Welcome to Chennai's premier 24/7 7M multi-sport turf facility in Kolathur. 
          Elevate your game on our state-of-the-art pitches. Founded in 2023.
          </p>

          <p className="text">
          Welcome to our Unisex Multi-Sport Turf - Your 24/7 Playground! 
          Enjoy sports, energy supplements, and unbeatable bulk booking deals.
          Join the fun!"
          </p>
          <Button link="#membership" className="primary">
            Join 7M Sports
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
