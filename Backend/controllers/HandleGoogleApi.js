import axios from "axios";

import dotenv from 'dotenv'
dotenv.config()

let HandleGoogleApi = async (req, res) => {
  let { source, destination } = req.body;
  try 
  {
     let response = await axios.get(`
        https://maps.googleapis.com/maps/api/directions/json?origin=${source}&destination=${destination}&key=${process.env.GOOGLE_KEY}
    `);
    return res.send(response.data.routes[0].overview_polyline.points);
  }
  catch(e)
  {
    console.log(e)
  }
};


export default HandleGoogleApi