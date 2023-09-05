import React from "react";
import styled from "./Facilities.module.css";
import batm from "../../assets/batm.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";
const Map = () => {
  const heading = (
    <>
      We <span>are</span> Near your house.
    </>
  );
  const url = 'https://goo.gl/maps/hiagCRtm13zaK6Cp7'
    return (
    <section className={styled.facility} id="map">
      <video src={batm} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
    
       {/* Hello world */}
 
 
       <br/>
            
       <br/>
    
       <br/>
       <br/>
       <br/>
            
            
          <center>   <Heading className="medium" heading={heading} />
           
          <br/>
            
          <br/>
            <p className="text">
              Take advantage of our Sport facilty comming soon
            </p>
            
            <br/>
            
            <br/>
            <div 
      className='card-wrapper'
      onClick={() => window.open(url, '_blank')}  
    >
            <Button className="primary" onClick={() => { window.location.href = url; } } >
            📍 AT KOLATHUR
          </Button>

          </div>
            </center>

            <br/>
            <br/>
            <br/>
    <Container> 
            <iframe
    id="map"
    src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d27318.888339532583!2d80.2113226!3d13.140119!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d13.1384426!2d80.22378929999999!5e1!3m2!1sen!2sin!4v1687551696177!5m2!1sen!2sin"
    width= "100%"
    padding-top ="25px"
    height={300}
    border="0"

    style={{ border: 0}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowtransparency="true"
    aria-hidden="false"
   
    
  />
     
         </Container>
         

      </div>
    </section>
  );
};

export default Map;
