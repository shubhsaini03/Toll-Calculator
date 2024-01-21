import L, { Icon } from 'leaflet'
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet-routing-machine'
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { decode, encode } from "@googlemaps/polyline-codec";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchGooglePolydata,
  fetchTollGuruTollData,
  tollGuruTollData,
} from "../slices/MapSlice"
import styled from 'styled-components';
import Loading from '../Loading';

const LeafletMap = () => {
    let dispatch=useDispatch()
    
    let {
      googlePolylineData,
      GOOGLE_DATA_LOADING,
      GOOGLE_DATA_SUCCESS,
      TOLLGURU_DATA_LOADING,
      TOLLGURU_DATA_SUCCESS,
      tollGuruTollData,
    } = useSelector((state) => state.Map);


    let [inputs,setInputs]=useState({
        source:'',
        destination:''
    })
    let [decoded,setDecoded]=useState([])
    let [markers,setMarkers]=useState([])
    let gates=[]
    let icon = new Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    });
    let handelChange=(e)=>
    {
        setInputs((prev)=>
        {
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    let handleClick=(source,destination)=>
    {
        dispatch(fetchGooglePolydata({source:inputs.source,destination:inputs.destination}))
        setInputs({
          source: "",
          destination: "",
        });
    }

    useEffect(() => {
      setDecoded(decode(googlePolylineData,5));
    }, [googlePolylineData]);


    useEffect(()=>
    {
      if(googlePolylineData.length>0)
      {
        dispatch(fetchTollGuruTollData(googlePolylineData));
      }
    },[googlePolylineData])


    if (GOOGLE_DATA_LOADING || TOLLGURU_DATA_LOADING) {
      return <Loading/>
    }
    if(TOLLGURU_DATA_SUCCESS)
    {
      let {route}=tollGuruTollData;
      let {hasTolls,tolls}=route;
      if(hasTolls)
      {
        for(let items of tolls)
        {
          if(items.id>10)
          {
            gates.push({coordinates:[items.lat,items.lng],name:items.name})
          }
          else 
          {
            continue;
          }
        }
      }
    }


  return (
    <StyledLeaflet>
      <section className="leaflet">
        <div className="input-section">
          <input
            type="text"
            name="source"
            value={inputs.source}
            onChange={handelChange}
            placeholder='Source'
          />
          <input
            type="text"
            name="destination"
            value={inputs.destination}
            onChange={handelChange}
            placeholder='Destination'
          />
          <button className='post-btn' onClick={handleClick}>Submit</button>
        </div>
        <div className="map-section">
          <MapContainer
            center={decoded[0] || [30.82272, 76.9407]}
            zoom={6}
            style={{ width: "100%", height: "300px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={decoded} />
            {gates.length > 0 &&
              gates.map((item) => {
                return (
                  <Marker position={item.coordinates} icon={icon}>
                    <Popup>{item.name}</Popup>
                  </Marker>
                );
              })}
            {console.log(gates)}
          </MapContainer>
        </div>
      </section>
    </StyledLeaflet>
  );
}


let StyledLeaflet=styled.section`

.leaflet 
{
  width: 90vw;
  max-width: 1070px;
  height:28vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 8fr;
  border-radius: 7px;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  margin-bottom:20px;
}
.leaflet .input-section 
{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  padding: 2rem 0;
}

.leaflet .input-section input ,button
{
  height: 2rem;
  width: 90vw;
  max-width: 20rem;
  outline:none;
  border: none;
  margin-bottom: 1rem;
  border-radius: 3px;
  padding: 0.5rem;
}



@media(max-width:900px)
{
  .leaflet
  {
    display: grid;
    grid-template-columns: 1fr;
  }
}

`

export default LeafletMap