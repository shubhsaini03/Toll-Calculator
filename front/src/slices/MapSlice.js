import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../Axiosinstance.js";



let initialState={
    googlePolylineData:'',
    tollGuruTollData:'',
    GOOGLE_DATA_LOADING:false,
    GOOGLE_DATA_SUCCESS:false,
    GOOGLE_DATA_FAILED:false,
    TOLLGURU_DATA_LOADING:false,
    TOLLGURU_DATA_SUCCESS:false,
    TOLLGURU_DATA_FAILED:false
}


let fetchGooglePolydata = createAsyncThunk("map/fetchGooglePolydata",async({source,destination})=>
{
    let response=await axios.post('/google',{source,destination})
    console.log(response.data)
    return response.data
});

let fetchTollGuruTollData = createAsyncThunk(
  "map/fetchTollGuruTollData",
  async (polyline) => {
     console.log("TOLL GURU STARTED");
    let response = await axios.post("/tollguru", {polyline});
    console.log(response.data);
    return response.data;
  }
);

let MapSlice=createSlice({
    name:'map',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder
          .addCase(fetchGooglePolydata.pending, (state) => {
            state.GOOGLE_DATA_LOADING = true;
            state.GOOGLE_DATA_SUCCESS = false;
          })
          .addCase(fetchGooglePolydata.fulfilled, (state, action) => {
            state.GOOGLE_DATA_LOADING = false;
            state.GOOGLE_DATA_SUCCESS = true;
            state.googlePolylineData=action.payload
          })
          .addCase(fetchGooglePolydata.rejected, (state) => {
            state.GOOGLE_DATA_LOADING = false;
            state.GOOGLE_DATA_FAILED = true;
            state.GOOGLE_DATA_SUCCESS = false;
          });
        builder
          .addCase(fetchTollGuruTollData.pending, (state) => {
            state.TOLLGURU_DATA_LOADING = true;
            state.TOLLGURU_DATA_SUCCESS = false;
          })
          .addCase(fetchTollGuruTollData.fulfilled, (state, action) => {
            state.TOLLGURU_DATA_LOADING = false;
            state.TOLLGURU_DATA_SUCCESS = true;
            state.tollGuruTollData = action.payload;
          })
          .addCase(fetchTollGuruTollData.rejected, (state) => {
            state.TOLLGURU_DATA_LOADING = false;
            state.TOLLGURU_DATA_FAILED = true;
            state.TOLLGURU_DATA_SUCCESS = false;
          });

    }
})


export default MapSlice.reducer


export {fetchGooglePolydata,fetchTollGuruTollData}