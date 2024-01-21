import React from 'react'
import styled from 'styled-components'
import LeafletMap from './LeafletMap';


const Hero = () => {
  return (
    <StlyedHero>
      <section className="hero">
        <div className="content">
          <h2>Toll Calculator – Google Maps with Tolls & Gas Costs</h2>
          <p>
            Looking to calculate toll costs between cities across Jamaica? Use
            the Jamaica Toll Calculator App! See trip cost breakdown - tolls,
            fuel and other applicable charges, toll plazas, discounts, etc.
            Travel on the cheapest or the fastest routes to your destination.
            For all vehicles - car, truck (2 axle to 9 axle), EV, RV, bus,
            motorcycle - across all countries.
          </p>
        </div>
      </section>
    </StlyedHero>
  );
}


let StlyedHero=styled.section`

*
{
    color: white;
}
.hero 
{
    width: 90vw;
    max-width: 1070px;
    margin:  0 auto;
    /* height: calc(100vh - 4rem); */
    /* background-color: magenta; */
    margin-top: 4rem;
    margin-bottom: 2rem;
}
.hero .content 
{
    /* background-color: yellow; */
}
.hero h2 
{
    font-size: 2.7rem;
    line-height: 3rem;
}
.hero .content p 
{
    margin-top: 2rem;
}

`

export default Hero