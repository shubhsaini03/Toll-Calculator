import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading';
import styled from 'styled-components'


const Expenses = () => {
    let { tollGuruTollData, TOLLGURU_DATA_LOADING } = useSelector(
      (state) => state.Map
    );

    if(TOLLGURU_DATA_LOADING)
    {
        return <Loading/>
    }



      const summary = tollGuruTollData.summary || {};
      const route = tollGuruTollData.route || {};
      const costs = route.costs || {};
      const distance = route.distance || {};
     


  return (
    
    <section className='Expenses'>
      <p > Total Cash : {costs.cash}</p>
      <p> Total Fuel : {costs.fuel}</p>
      <p>Total TollCost : {costs.minimumTollCost}</p>
      <p>Currency: {summary.currency}</p>
      {console.log(distance)}
      <p>Total Distance: {distance.metric}</p>
      <p>{distance.text}</p>
      <p>Total Value : {distance.value}</p>
    </section>
    



  );
  
}




export default Expenses