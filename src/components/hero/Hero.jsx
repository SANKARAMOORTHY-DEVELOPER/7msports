import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      THE EVOLUTION OF <span> turf of</span> Endless <span>potential</span>
    </>
  );

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
             Experience the perfect play surface for all sports 
             at our multi-sport turf facility. Join us as a franchisee to share the excitement
            </p>

            <Button className="primary" link="#membership">
              Become a Member/Franchisee
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
